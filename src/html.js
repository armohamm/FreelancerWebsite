/* eslint-disable react/no-danger */

import * as React from 'react'

function Html({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents
}) {
  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
      <script
        type="text/javascript"
        src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js"
        data-dojo-config="usePlainJson: true, isDebug: false"
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us7.list-manage.com","uuid":"59dc75620baddb24611cddb4a","lid":"cb867e2fbf","uniqueMethods":true}) })`
        }}
      />
    </html>
  )
}

export default Html
