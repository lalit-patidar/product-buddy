// Here we will going to put the all product catagories...
const catagories = [
  {
    type: "fmcg",
    catagories: [
      {
        type: "food",
        subCatagories: [
          {
            type: "stapleFoods",
            subCatagories: [
              {
                type: "flour",
                subCatagories: [
                  {
                    type: "wheet-flour",
                    subCatagories: [
                      {
                        type: "fine-flour",
                      },
                      {
                        type: "medium-flour",
                      },
                      {
                        type: "big-flour",
                      },
                    ],
                  },
                  {
                    type: "sorghum-flour",
                    subCatagories: [
                      {
                        type: "medium-flour",
                      },
                    ],
                  },
                ],
              },
              {
                type: "rice",
                subCatagories: [],
              },
              {
                type: "pluses",
                subCatagories: [
                  {
                    type: "moong",
                    subCatagories: [],
                  },
                  {
                    type: "tur",
                    subCatagories: [],
                  },
                  {
                    type: "urad",
                    subCatagories: [],
                  },
                ],
              },
              {
                type: "sugar",
                subCatagories: [],
              },
              {
                type: "masale",
                subCatagories: [],
              },
            ],
          },
          {
            type: "impulseFoods",
            subCatagories: [
              {
                type: "chocolate-and-cadies",
                subCatagories: [
                  {
                    type: "candy",
                    subCatagories: [],
                  },
                  {
                    type: "chocolate",
                    subCatagories: [],
                  },
                ],
              },
              {
                type: "mints-and-chewing-gums",
                subCatagories: [
                  {
                    type: "mints",
                    subCatagories: [],
                  },
                  {
                    type: "chewing gum",
                    subCatagories: [],
                  },
                ],
              },
              {
                type: "chips-and-kurkure",
                subCatagories: [
                  {
                    type: "potato-chips",
                    subCatagories: [
                      {
                        type: "simple-salted",
                      },
                      {
                        type: "tomato-flavour",
                      },
                    ],
                  },
                  {
                    type: "banana-chips",
                    subCatagories: [
                      {
                        type: "simple-salted",
                      },
                      {
                        type: "tomato-flavour",
                      },
                    ],
                  },
                  {
                    type: "kurkure",
                    subCatagories: [],
                  },
                ],
              },
            ],
          },
          {
            type: "other-food",
            subCatagories: [
              {
                type: "forzen-foods",
                subCatagories: [],
              },
              {
                type: "jam",
                subCatagories: [],
              },
              {
                type: "ketchup",
                subCatagories: [],
              },
            ],
          },
        ],
      },
      {
        type: "beverages",
        subCatagories: [
          {
            type: "non-alcohol",
            subCatagories: [
              {
                type: "water",
                subCatagories: [],
              },

              {
                type: "juices",
                subCatagories: [],
              },

              {
                type: "coldrinks",
                subCatagories: [],
              },
            ],
          },
          {
            type: "alcohol",
            subCatagories: [
              {
                type: "beers",
                subCatagories: [],
              },
              {
                type: "whisky",
                subCatagories: [],
              },
              {
                type: "rum",
                subCatagories: [],
              },
              {
                type: "brandy",
                subCatagories: [],
              },
              {
                type: "vodka",
                subCatagories: [],
              },
            ],
          },
        ],
      },
      {
        type: "personalCare",
        subCatagories: [
          {
            type: "hair-care",
            subCatagories: [],
          },
          {
            type: "soap-and-bath",
            subCatagories: [],
          },
          {
            type: "skin-care",
            subCatagories: [],
          },
          {
            type: "oral-care",
            subCatagories: [],
          },
          {
            type: "baby-care",
            subCatagories: [],
          },
          {
            type: "sexual-care",
            subCatagories: [
              {
                type: "condoms",
                subCatagories: [],
              },
              {
                type: "pills",
                subCatagories: [],
              },
            ],
          },
        ],
      },

      {
        type: "homeCare",
        subCatagories: [
          {
            type: "fabric",
            subCatagories: [],
          },
          {
            type: "surface",
            subCatagories: [],
          },
          {
            type: "toilet",
            subCatagories: [],
          },
          {
            type: "insecticides",
            subCatagories: [],
          },
          {
            type: "air cleaner",
            subCatagories: [],
          },
        ],
      },

      {
        type: "otc",
        subCatagories: [
          {
            type: "batteries",
            subCatagories: [],
          },
          {
            type: "medicines",
            subCatagories: [],
          },
          {
            type: "blam",
            subCatagories: [],
          },
        ],
      },
    ],
  },
  {
    type: "non-fmcg",
    catagories: [
      {
        type: "electronics",
        subCatagories: [],
      },
      {
        type: "hardware",
        subCatagories: [],
      },
      {
        type: "paints",
        subCatagories: [],
      },
      {
        type: "utensils",
        subCatagories: [],
      },
      {
        type: "books",
        subCatagories: [],
      },
      {
        type: "stationary",
        subCatagories: [],
      },
    ],
  },
];

const productCatagories = (productCatagory) => {
  switch (productCatagory) {
    case "electronics":
  }
};
