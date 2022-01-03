import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { params } = req.query

    if (!Array.isArray(params) || params.length != 2) return res.redirect("https://vercel.com")

    const [file, password] = params
    return res.redirect(`${process.env.SECRETS_API_PROJECT_URL}/api/get?password=${password}&file=${file}`)
}
