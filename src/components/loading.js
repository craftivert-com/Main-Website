"use client"

import { motion } from "framer-motion"
export default function Loading(){
    return (
        <>
    <div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
    </div>
        </>
    )
}