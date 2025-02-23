'use client'

interface ErrorPagePorps{
    error: Error,
    reset: () => void;
}

export default function ErrorPage({error}: ErrorPagePorps) {
    return <div>{ error.message }</div>
}