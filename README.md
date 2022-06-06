# NextJS Crash Course 
Completed NextJS Crash Course by Laith Academy

## NextJS vs React
- With SPAs instead of making a request to the server every time a user visited a new page your application would load all HTML, CSS, JavaScript on the inital request.
- So subsequent route transitions would happen on the client giving the app a more native like feel.
- SPAs have large bundle sizes
- With SPAs, the data is loaded on as needed basis, so if done wrong then each route transition is met with loading spinners
- SEO is also an issue with SPAs because you are relying on the browser to process the javascript first before figuring out the content of your page
- NextJS is built on top of React
- By default, NextJS will statically generate the page at build time or compile time unlike SPAs which do it at run time. It will serve up the HTML for every request.
- If that page needs data at build time, then you can use getStaticProps function which fetches and returns the data
- If that page needs data but can't be build at run time then you can server render the page (getServerSideProps) or fetch data on the client
- Also a feature called incremental static regeneration, which allows you to statically generate your page at build time then on a per page basis regenerate a page with new data
- NextJS comes with code splitting out of the box which means that each file inside of your page's directory will be split into their own bundles during build time so users download onl what they need
- NextJS comes with image optimization out of the box and also API routes
