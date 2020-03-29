import NextApp from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'
import { purple, red } from '@material-ui/core/colors'

const theme = createMuiTheme();

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}