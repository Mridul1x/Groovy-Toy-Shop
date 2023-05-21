import React, { useRef } from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-2xl mt-6 text-center font-bold">Blogs</h1>
      <div className="mx-12 text-justify">
        <h1 className="mt-6 mb-2 text-xl font-semibold">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p>
          Access tokens and refresh tokens are commonly used in authentication
          and authorization systems. Here's an explanation of what they are and
          how they work:
        </p>
        <p className="my-2">
          Access Token: An access token is a credential that is used to
          authenticate and authorize requests made to protected resources API
          endpoints, services, etc. It contains information about the user or
          client and their associated permissions. Access tokens are typically
          short-lived and have an expiration time. When a user logs in or
          authenticates, they receive an access token, which they include in
          each subsequent request to access protected resources. The server
          verifies the access token to ensure the user has the necessary
          permissions before granting access to the requested resource.
        </p>
        <p>
          Refresh Token: A refresh token is a long-lived credential used to
          obtain a new access token when the current one expires. Unlike access
          tokens, refresh tokens are not sent with every request to the server.
          When the access token expires, the client sends the refresh token to
          the server to request a new access token. The server verifies the
          refresh token and, if valid, issues a new access token to the client.
          Refresh tokens are typically stored securely on the client-side and
          should be protected from unauthorized access.
        </p>
        <h1 className="my-2 text-xl font-semibold">
          2. Compare SQL and NoSQL databases?
        </h1>
        <p>
          SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
          different types of database systems, each with its own characteristics
          and use cases. Here's a comparison between SQL and NoSQL databases:
          <li>
            Data Model: SQL: SQL databases use a structured data model based on
            tables with predefined schemas. Data is organized into rows and
            columns, and relationships between tables are established using
            primary and foreign keys. NoSQL: NoSQL databases use a flexible,
            schema-less data model. They can store unstructured,
            semi-structured, and structured data, often in formats like JSON,
            BSON, or key-value pairs. NoSQL databases are designed to be highly
            scalable and handle large volumes of data.
          </li>
          <li>
            Scalability: SQL: SQL databases traditionally scale vertically,
            which means increasing the hardware resources (CPU, RAM, storage) of
            a single server. Some SQL databases support horizontal scalability
            through sharding and replication techniques, but it can be more
            complex to implement. NoSQL: NoSQL databases are designed for
            horizontal scalability. They can distribute data across multiple
            servers and handle large-scale applications with ease. NoSQL
            databases are built to scale-out by adding more servers to the
            database cluster.
          </li>
          <li>
            Schema: SQL: SQL databases have a rigid schema where the table
            structure is defined before data insertion. Changes to the schema
            often require altering the table structure and migrating existing
            data, which can be time-consuming. NoSQL: NoSQL databases have a
            flexible schema that allows for dynamic changes. Each
            record/document can have its own structure, and new fields can be
            added without affecting other records. This flexibility is useful
            for handling evolving and diverse data structures.
          </li>
        </p>
        <h1 className="my-2 text-xl font-semibold">
         3.  What is express js? What is Nest JS?
        </h1>
        <p>
          Express.js and NestJS are both popular web application frameworks for
          building server-side applications in Node.js. Here's an overview of
          each framework:
          <li>
            Express.js: Express.js is a minimalist and flexible web application
            framework for Node.js. It provides a simple and intuitive API for
            building web servers and handling HTTP requests and responses.
            Express.js is unopinionated, meaning it doesn't enforce any
            particular structure or architecture on your application. It allows
            developers to have more control and flexibility in designing the
            application according to their specific needs. Express.js is
            lightweight and has a low learning curve, making it a popular choice
            for building small to medium-sized web applications and APIs. It
            provides middleware support, allowing you to easily add
            functionality to your application such as routing, handling
            authentication, parsing request bodies, and more. Express.js has a
            large and active community, which means there are numerous
            third-party libraries and plugins available to extend its
            capabilities.
          </li>
          <li>
            NestJS is a full-featured, opinionated framework for building
            scalable and maintainable server-side applications in Node.js. It is
            built with TypeScript and incorporates concepts from both
            object-oriented and functional programming paradigms. NestJS follows
            the architectural pattern of Angular, known as the Modular and
            Dependency Injection (DI) pattern. It promotes a structured and
            modular approach to application development, making it easier to
            manage large codebases and encourage code reusability. It provides a
            powerful and intuitive command-line interface (CLI) for generating
            components, modules, controllers, and other boilerplate code, which
            helps in quickly setting up and scaffolding a new application.
          </li>
        </p>
        <h1 className="my-2 text-xl font-semibold">
          4. What is MongoDB aggregate and how does it work?
        </h1>
        <p>
          MongoDB's Aggregation Framework is a powerful feature that allows you
          to perform advanced data processing operations on MongoDB collections.
          It provides a flexible and efficient way to analyze and transform
          data, enabling you to perform complex queries, data manipulations, and
          aggregations within the database. Here's an overview of how the
          MongoDB Aggregation Framework works: Pipeline Stages: Aggregation
          operations in MongoDB are performed through a pipeline, which consists
          of multiple stages. Each stage represents a specific operation or
          transformation applied to the data. The pipeline stages are executed
          sequentially, with the output of one stage serving as the input for
          the next stage. Each stage can perform operations such as filtering,
          grouping, sorting, projecting, transforming, joining, and calculating
          aggregations. Pipeline Operators: MongoDB provides a rich set of
          pipeline operators that can be used in various stages to perform
          different operations. Some commonly used operators include $match
          (filtering documents), $group (grouping and aggregating data), $sort
          (sorting documents), $project (specifying fields to include/exclude),
          $lookup (performing a left outer join), $unwind (deconstructing
          arrays), $limit (limiting the number of documents), and many more.
          Operators can be chained together to create complex aggregation
          pipelines that address specific data processing requirements.
        </p>
      </div>
    </div>
  );
};

export default Blog;
