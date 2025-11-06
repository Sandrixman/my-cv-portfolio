"use client"

export default function GlobalError({ error }: { error: Error }) {
    return (
        <html>
            <body className='flex items-center justify-center min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]'>
                <h1 className='text-2xl font-bold'>💥 Something globally went wrong</h1>
                <p className='mt-2 text-gray-500'>{error.message}</p>
            </body>
        </html>
    )
}
