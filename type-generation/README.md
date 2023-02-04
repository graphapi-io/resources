# GraphAPI Type Generation

This example describes how to generate typescript definitions for your GraphQL-based GraphAPI.

## Steps

### Clone this repository

```
git clone https://github.com/graphapi-io/resources.git
cd resources
```

### Install dependencies

```
 npm i
```

### Create API key

1.  Open your GraphAPI Settings on https://my.graphapi.io
1.  You may be asked to log in to your API. If you haven't done it yet, sign up using the same email address you're signed in with on my.graphapi.io
1.  Find "Authorization Settings"
1.  Under "BASIC AUTHORIZATION" you should see "DEFAULT KEY". Technically you could use it, but it's a best practice to generate a separate key for each application/use case.
1.  Click "Add Api Key" button in the section below
    ![Api Keys Section](./docs/img/add-api-key-1.png?raw=true)
1.  Provide a meaningful name and click "Create"
    ![Api Keys Section](./docs/img/add-api-key-2.png?raw=true)
1.  Copy the key
    ![Api Keys Section](./docs/img/add-api-key-3.png?raw=true)
1.  In the repository copy the .env.example file to .env file (or simply run `cp .env.example .env`)
1.  Replace the `API_KEY=<PROVIDE_YOUR_KEY_HERE>` with actual key. For example `API_KEY=yoursecretapikey`

### Add your GraphAPI URL

1.  Go into your API Settings on https://my.graphapi.com
2.  Click the "Copy to Clipboard" button
    ![Api Keys Section](./docs/img/get-api-url.png?raw=true)
3.  Replace the `API_URL=<PROVIDE_YOUR_API_URL>` with your actual url. For example: `API_URL=https://yourapiurl.com/graphql`

### Run code generation

```
 npm run codegen
```

Now you can see that the `src/generated/types.ts` has been updated.

## What is being generated?

For this example we have a simple model consisting of:

1. Blog
2. Post
3. Comment

We also have a single enum `PublishState` that indicates weather the Post is published or not.

The types are generated based on two things: the schema and the graphql queries an mutations that we define in `api` directory.

The types based on the schema are always generated, and they consist of all of the scalars, enums and inputs, however, the query and mutation results are based on the `.graphql` files from the `src/api` directory.

As the only query we have is `blog`, the only query response in `src/generated/types.ts` is `IQueryBlogQuery`.

It makes sense as the power of graphql is that you can use the same api in different applications, and each of them can query different pieces of data. With this approach each application can get its own types as well.
