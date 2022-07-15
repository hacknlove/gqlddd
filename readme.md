# POC graphql+DDD

The goal is to make each root type its own suddomain, with its own boundary auto-contained in its directory, and then to fractalize each type into sub-subdomains for each query, mutation, and main fields.

In order to deal with interdependencies, the subdomains have a directory named public that contains  the methods that other subdomains can safely use.

## How to use it

Clome it and install dependencies
```
git clone git@github.com:hacknlove/gqlddd.git
cd gqlddd
npm install
```

go to devenv and start mongo
```sh
make SERVICE=mongo up
```

Go to the root of the project and run 
```
npm run dev
```

Go to http://localhost:4000/graphql to play with the  the graphql api

this is an example query you can use

```
query video {
  Video(slug: "bad") {
    slug
    site
    models {
      sex
      name
      videos {
        slug
        site
        models {
          name
          sex
        }
      }
    }
  }
}
```

you should get this response 
```
{
  "data": {
    "Video": {
      "slug": "bad",
      "site": "deeper",
      "models": [
        {
          "sex": "F",
          "name": "Ivy Lebelle",
          "videos": [
            {
              "slug": "bold",
              "site": "deeper",
              "models": [
                {
                  "name": "Isiah Maxwell",
                  "sex": "M"
                },
                {
                  "name": "Ivy Lebelle",
                  "sex": "F"
                }
              ]
            },
            {
              "slug": "bad",
              "site": "deeper",
              "models": [
                {
                  "name": "Ivy Lebelle",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "denial",
              "site": "deeper",
              "models": [
                {
                  "name": "Ivy Lebelle",
                  "sex": "F"
                },
                {
                  "name": "Maitland Ward",
                  "sex": "F"
                },
                {
                  "name": "Manuel Ferrara",
                  "sex": "M"
                }
              ]
            }
          ]
        },
        {
          "sex": "M",
          "name": "Markus Dupree",
          "videos": [
            {
              "slug": "untangling",
              "site": "deeper",
              "models": [
                {
                  "name": "Abella Danger",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "whos-becky",
              "site": "deeper",
              "models": [
                {
                  "name": "Angela White",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "did-you-change",
              "site": "deeper",
              "models": [
                {
                  "name": "Khloe Kapri",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "bad",
              "site": "deeper",
              "models": [
                {
                  "name": "Ivy Lebelle",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "relentless",
              "site": "deeper",
              "models": [
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Vicki Chase",
                  "sex": "F"
                }
              ]
            },
            {
              "slug": "things-worth-having-are-difficult",
              "site": "deeper",
              "models": [
                {
                  "name": "Gia Derza",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "training-the-maid",
              "site": "deeper",
              "models": [
                {
                  "name": "Autumn Falls",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "sex-doll",
              "site": "deeper",
              "models": [
                {
                  "name": "Elsa Jean",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "i-got-you",
              "site": "deeper",
              "models": [
                {
                  "name": "Alexa Grace",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "pizza-delivery",
              "site": "deeper",
              "models": [
                {
                  "name": "Gina Valentina",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "coupledom-part-1",
              "site": "deeper",
              "models": [
                {
                  "name": "Janice Griffith",
                  "sex": "F"
                },
                {
                  "name": "Liv Wild",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Oliver Davis",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "coupledom-part-2",
              "site": "deeper",
              "models": [
                {
                  "name": "Janice Griffith",
                  "sex": "F"
                },
                {
                  "name": "Liv Wild",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Oliver Davis",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "going-deeper",
              "site": "deeper",
              "models": [
                {
                  "name": "Adria Rae",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Mick Blue",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "happy-birthday",
              "site": "deeper",
              "models": [
                {
                  "name": "Emily Willis",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "audition",
              "site": "deeper",
              "models": [
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Mia Melano",
                  "sex": "F"
                }
              ]
            },
            {
              "slug": "rule-1",
              "site": "deeper",
              "models": [
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Naomi Swann",
                  "sex": "F"
                }
              ]
            },
            {
              "slug": "vanity-will-trap-you",
              "site": "deeper",
              "models": [
                {
                  "name": "Andreina De Luxe",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "call-your-wife",
              "site": "deeper",
              "models": [
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Nia Nacci",
                  "sex": "F"
                }
              ]
            },
            {
              "slug": "packed",
              "site": "deeper",
              "models": [
                {
                  "name": "Avi Love",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Mick Blue",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "show-me-your-legs",
              "site": "deeper",
              "models": [
                {
                  "name": "Jessa Rhodes",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "acceptance",
              "site": "deeper",
              "models": [
                {
                  "name": "Angela White",
                  "sex": "F"
                },
                {
                  "name": "Emily Willis",
                  "sex": "F"
                },
                {
                  "name": "Isiah Maxwell",
                  "sex": "M"
                },
                {
                  "name": "Kira Noir",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Mick Blue",
                  "sex": "M"
                },
                {
                  "name": "Rob Piper",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "do-you-want-to",
              "site": "deeper",
              "models": [
                {
                  "name": "Gianna Dior",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Vina Sky",
                  "sex": "F"
                }
              ]
            },
            {
              "slug": "primal-instincts",
              "site": "deeper",
              "models": [
                {
                  "name": "Izzy Lush",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Naomi Swann",
                  "sex": "F"
                }
              ]
            },
            {
              "slug": "same-terms",
              "site": "deeper",
              "models": [
                {
                  "name": "Gabbie Carter",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "self-care",
              "site": "deeper",
              "models": [
                {
                  "name": "Kristen Scott",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "unbroken-hour",
              "site": "deeper",
              "models": [
                {
                  "name": "Chanel Grey",
                  "sex": "F"
                },
                {
                  "name": "Diana Grace",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "earned-it-part-1",
              "site": "deeper",
              "models": [
                {
                  "name": "Adriana Chechik",
                  "sex": "F"
                },
                {
                  "name": "Manuel Ferrara",
                  "sex": "M"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Mick Blue",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "im-not-leaving",
              "site": "deeper",
              "models": [
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Rae Lil Black",
                  "sex": "F"
                }
              ]
            },
            {
              "slug": "secretary",
              "site": "deeper",
              "models": [
                {
                  "name": "Maitland Ward",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                },
                {
                  "name": "Riley Reid",
                  "sex": "F"
                }
              ]
            },
            {
              "slug": "paper-rules-part-1",
              "site": "deeper",
              "models": [
                {
                  "name": "Brooklyn Gray",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "where-were-you",
              "site": "deeper",
              "models": [
                {
                  "name": "Allie Nicole",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            },
            {
              "slug": "she-wants-to-know",
              "site": "deeper",
              "models": [
                {
                  "name": "Adira Allure",
                  "sex": "F"
                },
                {
                  "name": "Markus Dupree",
                  "sex": "M"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```