import pool from "@/lib/db"
import { NextResponse } from "next/server"
import path from "path"
import fs from "fs/promises"

export const runtime = "nodejs"

export async function POST(req) {
  try {
    const formData = await req.formData()

    const place_name  = formData.get("place_name")
    const location    = formData.get("location")
    const category    = formData.get("category")
    const description = formData.get("description")
    const best_time   = formData.get("best_time")
    const entry_fee   = formData.get("entry_fee")
    const image       = formData.get("image")

    // --- Validation ---
    if (!place_name || !location || !category || !description) {
      return NextResponse.json(
        { error: "place_name, location, category, and description are required." },
        { status: 400 }
      )
    }

    if (!best_time || best_time.trim() === "") {
      return NextResponse.json(
        { error: "best_time is required and must not be empty." },
        { status: 400 }
      )
    }

    const entryFeeNum = parseFloat(entry_fee)
    if (entry_fee === null || entry_fee === "" || isNaN(entryFeeNum) || entryFeeNum < 0) {
      return NextResponse.json(
        { error: "entry_fee is required and must be a non-negative number." },
        { status: 400 }
      )
    }

    if (!image) {
      return NextResponse.json({ error: "image is required." }, { status: 400 })
    }
    if (typeof image.arrayBuffer !== "function" || !image.name) {
      return NextResponse.json({ error: "image must be a valid file." }, { status: 400 })
    }

    // Convert file to buffer
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create unique file name
    const fileName = `${Date.now()}-${image.name}`

    // Upload path
    const uploadDir = path.join(process.cwd(), "public/uploads")
    const uploadPath = path.join(uploadDir, fileName)

    // Save file
    await fs.mkdir(uploadDir, { recursive: true })
    await fs.writeFile(uploadPath, buffer)

    // URL to store in DB
    const image_url = `/uploads/${fileName}`

    // Insert into database (including new fields)
    const result = await pool.query(
      `INSERT INTO travel_places
       (place_name, location, category, description, best_time, entry_fee, image_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [place_name, location, category, description, best_time.trim(), entryFeeNum, image_url]
    )

    return NextResponse.json(result.rows[0], { status: 201 })

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT * FROM travel_places ORDER BY created_at DESC"
    )

    return NextResponse.json(result.rows)

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}