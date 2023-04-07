query ($id: String) {
    blogPost(id: { eq: $id }) {
      title
      body
      avatar {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
    }
  }