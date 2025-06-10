"use client"

export function MechanicalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-10">
      <div
        className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-300 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div className="absolute top-1/4 right-20 w-16 h-16 border-2 border-green-300 rotate-45" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-purple-300 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-orange-300 rotate-12" />

      {/* Gear-like shapes with pleasant colors */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="w-40 h-40 border-4 border-blue-200 rounded-full relative animate-spin"
          style={{ animationDuration: "30s" }}
        >
          <div className="absolute top-0 left-1/2 w-4 h-8 bg-blue-200 transform -translate-x-1/2 -translate-y-2 rounded" />
          <div className="absolute bottom-0 left-1/2 w-4 h-8 bg-blue-200 transform -translate-x-1/2 translate-y-2 rounded" />
          <div className="absolute left-0 top-1/2 w-8 h-4 bg-blue-200 transform -translate-y-1/2 -translate-x-2 rounded" />
          <div className="absolute right-0 top-1/2 w-8 h-4 bg-blue-200 transform -translate-y-1/2 translate-x-2 rounded" />
        </div>
      </div>

      {/* Additional pleasant decorative elements */}
      <div
        className="absolute top-20 right-1/4 w-12 h-12 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full animate-pulse" />
    </div>
  )
}
