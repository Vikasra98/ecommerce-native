// Copyright Vikas Ranjan 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/vikas-ranjan-4a83aa165/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
