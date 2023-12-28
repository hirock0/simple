import { SchemaData } from "@/lib/ScemaData/SchemaData";
import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function GET(){
    try{
        await mongoose.connect(connectionStr)
        let data = await SchemaData.find()
        return NextResponse.json(data)
    }catch(err){
        throw new Error("File not found")
    }

}