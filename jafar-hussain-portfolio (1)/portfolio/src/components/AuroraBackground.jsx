/**
 * Ambient aurora layer for the hero: two large, heavily blurred gradient
 * blobs that drift slowly. Pure CSS transforms (translate + scale), so it
 * costs nothing extra in JS and stays on the GPU compositor.
 */
export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute -top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.55), transparent 70%)',
          animation: 'aurora-drift-1 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.55), transparent 70%)',
          animation: 'aurora-drift-2 22s ease-in-out infinite',
        }}
      />
    </div>
  )
}
