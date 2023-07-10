import { gql } from "@apollo/client"

export const HOME_QUERY = gql`
    query homepage {
        page(id: "homepage", idType: URI) {
            homepage {
                heroSubtitle
                heroText
                heroTitle
            }
        }
    }
`

export const MAIN_MENU = gql`
    query MainMenu {
        menu(id: "MAIN", idType: NAME) {
            id
            menuItems {
                nodes {
                    label
                    path
                    order
                    id
                }
            }
        }
    }
`
