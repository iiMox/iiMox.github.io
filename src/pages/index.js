import React from "react"
import { Helmet } from "react-helmet"

import "../../static/css/bootstrap.min.css"

import Layout from "../components/Layout"

export default function Home() {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <title>Nassim YAICI</title>
        <meta name="description" content="Nassim YAICI's website."></meta>
      </Helmet>
      <Layout></Layout>
    </>
  )
}
