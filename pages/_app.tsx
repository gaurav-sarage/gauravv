
import Layout from "@/components/React/Layout";

// import "@/styles/globals.css";
// import "@/styles/highlights.css";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
0
export default MyApp;