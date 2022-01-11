const products = [
    {
      title: "AHA 25% + PHA 5% + BHA 2%",
      reviews: 585,
      desc: "Even skin tone & texture",
      tprice: 699,
      dprice: 689,
      category: "Acne-marks",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistAHAPHABHABlack1200pxCopy-min_400x.png",
    },
    {
      title: "Alpha Arbutin 2% + Hyaluronic Acid 1%",
      reviews: 993,
      desc: "Reduces dark spots & evens skin tone",
      tprice: 549,
      dprice: 539,
      category: "Alopecia",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistArbutin1200px-min_400x.png",
    },
    {
      title: "Azeclair 17% + Propolis",
      reviews: 53,
      desc: "Reduces acne & heals skin",
      tprice: 699,
      dprice: 689,
      category: "Anti-acne",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistAzeclair1200px-min_400x.png",
    },
    {
      title: "Granactive Retinoid 2% (Emulsion)",
      reviews: 324,
      desc: "Reduce fine lines & wrinkles",
      tprice: 699,
      dprice: 695,
      category: "Anti-aging",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistRetinoidFront-min_400x.png",
    },
    {
      title: "Hair Growth Actives 18%",
      reviews: 148,
      desc: "Reduces hairfall & promotes growth",
      tprice: 799,
      dprice: 795,
      category: "Anti-Hairfall",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/Minimalist-hair-grwoth-1200px-min_400x.png",
    },
    {
      title: "Hyaluronic Acid 2% + Vitamin B5",
      reviews: 473,
      desc: "Hydrates & plumps skin",
      tprice: 599,
      dprice: 595,
      category: "Anti-inflammatory",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistHA2Front-min_400x.png",
    },
    {
      title: "L-Ascorbic Acid 90% + E + F Powder",
      reviews: 37,
      desc: "Brightens skin & reverses UV damage",
      tprice: 499,
      dprice: 489,
      category: "Brightening",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/Minimalist1200pxLAA-E-F-Powder-min_400x.png",
    },
    {
      title: "Lactic Acid 10% + Hyaluronic Acid 1%",
      reviews: 153,
      desc: "Skin surface exfoliation",
      tprice: 599,
      dprice: 589,
      category: "Cleanser",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistLacticHABlack1200pxCopy-min_400x.png",
    },
    {
      title: "Multi-Peptide Serum (7% Matrixyl 3000 + 3% Bio-Placenta)",
      reviews: 130,
      desc: "Prevent Ageing",
      tprice: 599,
      dprice: 695,
      category: "Dark spots",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistMulti-peptide-min_400x.png",
    },
    {
      title: "Multi-Vitamin SPF 50",
      reviews: 89,
      desc: "Broad spectrum SPF 50",
      tprice: 399,
      dprice: 389,
      category: "Even tone",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/Minimalist1200pxSPF50-min_400x.png",
    },
    {
      title: "Niacinamide 10% + Zinc",
      reviews: 1173,
      desc: "Controls excess oil",
      tprice: 599,
      dprice: 595,
      category: "Exfoliation",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistNiacinamide10Front-min_400x.png",
    },
    {
      title: "Niacinamide 5% + Hyaluronic Acid 1%",
      reviews: 471,
      desc: "Hydrates, repairs & soothes skin",
      tprice: 599,
      dprice: 595,
      category: "Fine lines",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistNia51200px-min_400x.png",
    },
    {
      title: "PHA 3% + Biotic Toner",
      reviews: 304,
      desc: "For pore tightening & skin rebalancing",
      tprice: 399,
      dprice: 395,
      category: "Hair Growth",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistPHAToner-min_400x.png",
    },
    {
      title: "Retinol 0.3% + Q10",
      reviews: 128,
      desc: "For fine lines & wrinkles",
      tprice: 599,
      dprice: 589,
      category: "Hydration",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistRetinolQ10Front-min_400x.png",
    },
    {
      title: "Rosehip Oil + VC-IP 3%",
      reviews: 60,
      desc: "Brightens & reduces photoaging",
      tprice: 649,
      dprice: 645,
      category: "Hyperpigmentation",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistRosehip1200px-min_400x.png",
    },
    {
      title: "Salicylic + LHA  2% Face Cleanser",
      reviews: 277,
      desc: "Reduces sebum & prevents breakout",
      tprice: 299,
      dprice: 295,
      category: "Melasma",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistSalicylicLHACleanser1200px-min_400x.png",
    },
    {
      title: "Salicylic Acid 2%",
      reviews: 891,
      desc: "Reduce blackheads & breakouts",
      tprice: 549,
      dprice: 545,
      category: "Moisturization",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistSalicylic1200px-min_400x.png",
    },
    {
      title: "Sepicalm 3% + Oat Moisturizer",
      reviews: 632,
      desc: "Skin soothing, light moisturization",
      tprice: 349,
      dprice: 345,
      category: "Oil balance",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistMoisturiserFront-min_400x.png",
    },
    {
      title: "SPF 60 + Silymarin",
      reviews: 35,
      desc: "Broad spectrum SPF 60",
      tprice: 599,
      dprice: 589,
      category: "Pore cleaning",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/Minimalist1200pxSPF60-min_400x.png",
    },
    {
      title: "Squalane 100%",
      reviews: 222,
      desc: "Superior, lightweight moisturization",
      tprice: 699,
      dprice: 695,
      category: "Pore tightening",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistSqualaneFront-min_400x.png",
    },
    {
      title: "Tranexamic 3% + HPA",
      reviews: 363,
      desc: "Reduces Melasma, PIE, PIH & Scars",
      tprice: 649,
      dprice: 645,
      category: "Remove blackheads",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistTranexamic1200px-min_400x.png",
    },
    {
      title: "Vitamin C (Ethyl Ascorbic Acid) 10% + Acetyl Glucosamine 1%",
      reviews: 895,
      desc: "For brighter & illuminating skin",
      tprice: 699,
      dprice: 695,
      category: "Skin texture",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistVitaminCFront-min_400x.png",
    },
    {
      title: "Vitamin C (Ethyl Ascorbic Acid) 10% + Acetyl Glucosamine 1%",
      reviews: 895,
      desc: "For brighter & illuminating skin",
      tprice: 699,
      dprice: 695,
      category: "Sun damage",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistVitaminCFront-min_400x.png",
    },
    {
      title: "Vitamin C (Ethyl Ascorbic Acid) 10% + Acetyl Glucosamine 1%",
      reviews: 895,
      desc: "For brighter & illuminating skin",
      tprice: 699,
      dprice: 695,
      category: "Sunscreen",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistVitaminCFront-min_400x.png",
    },
    {
      title: "Vitamin C (Ethyl Ascorbic Acid) 10% + Acetyl Glucosamine 1%",
      reviews: 895,
      desc: "For brighter & illuminating skin",
      tprice: 699,
      dprice: 695,
      category: "Toner",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistVitaminCFront-min_400x.png",
    },
    {
      title: "AHA 25% + PHA 5% + BHA 2%",
      reviews: 585,
      desc: "Even skin tone & texture",
      tprice: 699,
      dprice: 689,
      category: "Acne-marks",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistAHAPHABHABlack1200pxCopy-min_400x.png",
    },
    {
      title: "Alpha Arbutin 2% + Hyaluronic Acid 1%",
      reviews: 993,
      desc: "Reduces dark spots & evens skin tone",
      tprice: 549,
      dprice: 539,
      category: "Alopecia",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistArbutin1200px-min_400x.png",
    },
    {
      title: "Azeclair 17% + Propolis",
      reviews: 53,
      desc: "Reduces acne & heals skin",
      tprice: 699,
      dprice: 689,
      category: "Anti-acne",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistAzeclair1200px-min_400x.png",
    },
    {
      title: "Granactive Retinoid 2% (Emulsion)",
      reviews: 324,
      desc: "Reduce fine lines & wrinkles",
      tprice: 699,
      dprice: 695,
      category: "Anti-aging",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistRetinoidFront-min_400x.png",
    },
    {
      title: "Hair Growth Actives 18%",
      reviews: 148,
      desc: "Reduces hairfall & promotes growth",
      tprice: 799,
      dprice: 795,
      category: "Anti-Hairfall",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/Minimalist-hair-grwoth-1200px-min_400x.png",
    },
    {
      title: "Hyaluronic Acid 2% + Vitamin B5",
      reviews: 473,
      desc: "Hydrates & plumps skin",
      tprice: 599,
      dprice: 595,
      category: "Anti-inflammatory",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistHA2Front-min_400x.png",
    },
    {
      title: "L-Ascorbic Acid 90% + E + F Powder",
      reviews: 37,
      desc: "Brightens skin & reverses UV damage",
      tprice: 499,
      dprice: 489,
      category: "Brightening",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/Minimalist1200pxLAA-E-F-Powder-min_400x.png",
    },
    {
      title: "Lactic Acid 10% + Hyaluronic Acid 1%",
      reviews: 153,
      desc: "Skin surface exfoliation",
      tprice: 599,
      dprice: 589,
      category: "Cleanser",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistLacticHABlack1200pxCopy-min_400x.png",
    },
    {
      title: "Multi-Peptide Serum (7% Matrixyl 3000 + 3% Bio-Placenta)",
      reviews: 130,
      desc: "Prevent Ageing",
      tprice: 599,
      dprice: 695,
      category: "Dark spots",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistMulti-peptide-min_400x.png",
    },
    {
      title: "Multi-Vitamin SPF 50",
      reviews: 89,
      desc: "Broad spectrum SPF 50",
      tprice: 399,
      dprice: 389,
      category: "Even tone",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/Minimalist1200pxSPF50-min_400x.png",
    },
    {
      title: "Niacinamide 10% + Zinc",
      reviews: 1173,
      desc: "Controls excess oil",
      tprice: 599,
      dprice: 595,
      category: "Exfoliation",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistNiacinamide10Front-min_400x.png",
    },
    {
      title: "Niacinamide 5% + Hyaluronic Acid 1%",
      reviews: 471,
      desc: "Hydrates, repairs & soothes skin",
      tprice: 599,
      dprice: 595,
      category: "Fine lines",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistNia51200px-min_400x.png",
    },
    {
      title: "PHA 3% + Biotic Toner",
      reviews: 304,
      desc: "For pore tightening & skin rebalancing",
      tprice: 399,
      dprice: 395,
      category: "Hair Growth",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistPHAToner-min_400x.png",
    },
    {
      title: "Retinol 0.3% + Q10",
      reviews: 128,
      desc: "For fine lines & wrinkles",
      tprice: 599,
      dprice: 589,
      category: "Hydration",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistRetinolQ10Front-min_400x.png",
    },
    {
      title: "Rosehip Oil + VC-IP 3%",
      reviews: 60,
      desc: "Brightens & reduces photoaging",
      tprice: 649,
      dprice: 645,
      category: "Hyperpigmentation",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistRosehip1200px-min_400x.png",
    },
    {
      title: "Salicylic + LHA  2% Face Cleanser",
      reviews: 277,
      desc: "Reduces sebum & prevents breakout",
      tprice: 299,
      dprice: 295,
      category: "Melasma",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistSalicylicLHACleanser1200px-min_400x.png",
    },
    {
      title: "Salicylic Acid 2%",
      reviews: 891,
      desc: "Reduce blackheads & breakouts",
      tprice: 549,
      dprice: 545,
      category: "Moisturization",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistSalicylic1200px-min_400x.png",
    },
    {
      title: "Sepicalm 3% + Oat Moisturizer",
      reviews: 632,
      desc: "Skin soothing, light moisturization",
      tprice: 349,
      dprice: 345,
      category: "Oil balance",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistMoisturiserFront-min_400x.png",
    },
    {
      title: "SPF 60 + Silymarin",
      reviews: 35,
      desc: "Broad spectrum SPF 60",
      tprice: 599,
      dprice: 589,
      category: "Pore cleaning",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/Minimalist1200pxSPF60-min_400x.png",
    },
    {
      title: "Squalane 100%",
      reviews: 222,
      desc: "Superior, lightweight moisturization",
      tprice: 699,
      dprice: 695,
      category: "Pore tightening",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistSqualaneFront-min_400x.png",
    },
    {
      title: "Tranexamic 3% + HPA",
      reviews: 363,
      desc: "Reduces Melasma, PIE, PIH & Scars",
      tprice: 649,
      dprice: 645,
      category: "Remove blackheads",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistTranexamic1200px-min_400x.png",
    },
    {
      title: "Vitamin C (Ethyl Ascorbic Acid) 10% + Acetyl Glucosamine 1%",
      reviews: 895,
      desc: "For brighter & illuminating skin",
      tprice: 699,
      dprice: 695,
      category: "Skin texture",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistVitaminCFront-min_400x.png",
    },
    {
      title: "Vitamin C (Ethyl Ascorbic Acid) 10% + Acetyl Glucosamine 1%",
      reviews: 895,
      desc: "For brighter & illuminating skin",
      tprice: 699,
      dprice: 695,
      category: "Sun damage",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistVitaminCFront-min_400x.png",
    },
    {
      title: "Vitamin C (Ethyl Ascorbic Acid) 10% + Acetyl Glucosamine 1%",
      reviews: 895,
      desc: "For brighter & illuminating skin",
      tprice: 699,
      dprice: 695,
      category: "Sunscreen",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistVitaminCFront-min_400x.png",
    },
    {
      title: "Vitamin C (Ethyl Ascorbic Acid) 10% + Acetyl Glucosamine 1%",
      reviews: 895,
      desc: "For brighter & illuminating skin",
      tprice: 699,
      dprice: 695,
      category: "Toner",
      url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistVitaminCFront-min_400x.png",
    },
  ];

  let maindiv = document.querySelector(".displayitems");
  const appendproducts = (products) => {
    maindiv.innerHTML = null;
    products.map((items) => {
      let itemdiv = document.createElement("div");
      itemdiv.setAttribute('class','itemdiv');
      itemdiv.addEventListener('click',()=>{
          localStorage.setItem('singleitem',JSON.stringify(items));
          window.location.href = "singleproduct.html";
      })
      let imgdiv = document.createElement("div");
      imgdiv.setAttribute("class", "imgdiv");
      let img = document.createElement("img");
      img.src = items.url;
      imgdiv.append(img);

      let contentdiv = document.createElement("div");
      contentdiv.setAttribute("class", "contentdiv");
      let name = document.createElement("p");
      name.textContent = items.title;
      let reviewbox = document.createElement("div");
      reviewbox.setAttribute('class','reviewbox');
      let icondiv = document.createElement("div");
      if (items.reviews > 700) {
        for (var i = 0; i < 5; i++) {
          let iconspan = document.createElement("span");
          if (i < 4) {
            iconspan.innerHTML = `<i class="fas fa-star"></i>`;
          } else {
            iconspan.innerHTML = `<i class="fas fa-star-half-alt"></i>`;
          }
          icondiv.append(iconspan);
        }
      } else if (items.reviews < 700) {
        for (var i = 0; i < 5; i++) {
          let iconspan = document.createElement("span");
          if (i < 4) {
            iconspan.innerHTML = `<i class="fas fa-star"></i>`;
          } else {
            iconspan.innerHTML = `<i class="far fa-star"></i>`;
          }
          icondiv.append(iconspan);
        }
      }
      let rating = document.createElement("span");
      rating.textContent = `${items.reviews} reviews`;
      reviewbox.append(icondiv, rating);

      let description = document.createElement("p");
      description.textContent = items.desc;

      let pricediv = document.createElement("div");
      pricediv.setAttribute("class", "pricediv");
      let total = document.createElement("span");
      total.textContent = `₹${items.tprice}`;
      let discount = document.createElement("span");
      discount.textContent = `₹${items.dprice}`;
      pricediv.append(total, discount);
      contentdiv.append(name, reviewbox, description, pricediv);
      itemdiv.append(imgdiv, contentdiv);
      maindiv.append(itemdiv);
    });
  };
  appendproducts(products);
  function show(value) {
    var categorizeitem = [];
    for (var i = 0; i < products.length; i++) {
      if (value === products[i].category) {
        categorizeitem.push(products[i]);
      }
    }
    appendproducts(categorizeitem);
  }
  