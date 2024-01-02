import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
      data {
        attributes {
          name
          slug
          developers {
            data {
              attributes {
                name
              }
            }
          }
          cover {
            data {
              attributes {
                url
              }
            }
          }
          price
        }
      }
    }
  }
`
