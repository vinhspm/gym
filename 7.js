let a = [
    {
        calo : 80,
        video : 'https://www.youtube.com/embed/0fxhP9LFhDw',
    },
    {
        calo: 280,
        video: "https://www.youtube.com/embed/_Iujuo9fLhg",
    },
    {
        calo : 140,
        video: "https://www.youtube.com/embed/2Yk_z7CK6Ig",
    },
    {
        calo: 180,
        video: "https://www.youtube.com/embed/FWShSllV9go",

    },
    {
        calo : 50,
        video: "https://www.youtube.com/embed/VrSbzlkiGN0",
    },
    {
        calo : 400,
        video: "https://www.youtube.com/embed/d7r8vir2aEg",
    }, 
    {
        calo : 320,
        video: "https://www.youtube.com/embed/dz1NQwHS3pU",
    },
]
for ( let i=0 ; i<a.length-1 ; i++ ) {
    for ( let j=i+1 ; j<a.length ; j++ ) {
        if(a[i].calo > a[j].calo) [a[i],a[j]] = [a[j],a[i]];
    }
}
let e0 = `<h3>Day 1</h3>
<div class="paragraph">
    <p><b>Breakfast:</b></p>
  </div>
  <div class="paragraph">
    <ul>
       <li>1/2 cup egg whites scrambled with 1 teaspoon olive oil, 1 teaspoon chopped basil, 1 teaspoon grated Parmesan, and 1/2 cup cherry tomatoes</li>
       <li>1 slice whole-grain toast</li>
       <li>1/2 cup blueberries</li>
       <li>1 cup skim milk</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Snack:&nbsp;</b></p>
  </div>
  <div class="paragraph">
    <ul>
       <li>1/2 cup fat-free Greek yogurt topped with 1/4 cup sliced strawberries</li>
  </ul>
  </div>
  <p><b>Lunch:&nbsp;</b></p>
  <div class="paragraph">
    <ul>
       <li>Salad made with: 3/4 cup cooked bulgur, 4 ounces chopped grilled chicken breast, 1 tablespoon shredded low-fat cheddar, diced grilled veggies (2 tablespoons onion, 1/4 cup diced zucchini, 1/2 cup bell pepper), 1 teaspoon chopped cilantro, and 1 tablespoon low-fat vinaigrette (check out these <a href="https://www.shape.com/healthy-eating/healthy-recipes/buddha-bowl-ideas-vegetarian-lunch-recipes">other Buddha bowl recipes</a> too.)</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Snack:&nbsp;</b></p>
  </div>
  <div class="paragraph">
    <ul>
       <li>2 tablespoons hummus and 6 baby carrots</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Dinner:</b></p>
  </div>
  <div class="paragraph">
    <ul>
       <li>4 ounces grilled salmon</li>
       <li>1 cup wild rice with 1 tablespoon slivered toasted almonds</li>
       <li>1 cup wilted baby spinach with 1 teaspoon each olive oil, balsamic vinegar, and grated Parmesan</li>
       <li>1/2 cup diced cantaloupe topped with</li>
       <li>1/2 cup all-fruit raspberry sorbet and 1 teaspoon chopped walnuts</li>
  </ul>
  </div>
  <img style="padding-left: 4cm;" src="/images/1.jpg" width="65%" height="65%" alt="">` ; 
  let e1 = `
  <h3>Day 2</h3>
      <div class="paragraph">
        <p><b>Breakfast:</b></p>
      </div>
      <div class="paragraph">
        <ul>
           <li>3/4 cup steel-cut or old-fashioned oatmeal prepared with water; stir in 1/2 cup skim milk</li>
           <li>2 links country-style turkey sausage</li>
           <li>1 cup blueberries</li>
      </ul>
      </div>
      <div class="paragraph">
        <p><b>Snack:</b></p>
      </div>
      <div class="paragraph">
        <ul>
           <li>1/2 cup fat-free ricotta cheese with 1/2 cup raspberries and 1 tablespoon chopped pecans</li>
      </ul>
      </div>
      <div class="paragraph">
        <p><b>Snack:</b></p>
      </div>
      <div class="paragraph">
        <ul>
           <li>1/2 cup fat-free cottage cheese with 1/2 cup salsa</li>
      </ul>
      </div>
      <div class="paragraph">
        <p><b>Dinner:</b></p>
      </div>
      <div class="paragraph">
        <ul>
           <li>1 turkey burger</li>
           <li>3/4 cup roasted cauliflower and broccoli florets</li>
           <li>3/4 cup brown rice</li>
           <li>1 cup spinach salad with 1 tablespoon light balsamic vinaigrette</li>
      </ul>
      </div>
      <img style="padding-left: 4cm;" src="/images/2.jpg" width="65%" width="65%" alt="">`
      let e2 = `
      <h3>Day 3</h3>
      <div class="paragraph">
        <p><b>Breakfast:</b></p>
      </div>
      <div class="paragraph">
        <ul>
           <li>Omelet made with 4 egg whites and 1 whole egg, 1/4 cup chopped broccoli, 2 tablespoons each fat-free refried beans, diced onion, diced mushrooms, and salsa</li>
           <li>Quesadilla made with 1/2 of one small corn tortilla and 1 tablespoon low-fat jack cheese</li>
           <li>1/2 cup diced watermelon</li>
      </ul>
      </div>
      <div class="paragraph">
        <p><b>Snack:</b></p>
      </div>
      <div class="paragraph">
        <ul>
           <li>1/2 cup fat-free vanilla yogurt with 1 sliced apple and 1 tablespoon chopped walnuts</li>
      </ul>
      </div>
      <div class="paragraph">
        <p><b>Lunch:</b></p>
      </div>
      <div class="paragraph">
        <ul>
           <li>Salad made with 2 cups chopped Romaine, 4 ounces grilled chicken, 1/2 cup chopped celery, 1/2 cup diced mushrooms, 2 tablespoons shredded low-fat cheddar, and 1 tablespoon low-fat Caesar dressing</li>
           <li>1 medium nectarine</li>
           <li>1 cup skim milk</li>
      </ul>
      </div>
      <div class="paragraph">
        <p><b>Snack:</b></p>
      </div>
      <div class="paragraph">
        <ul>
           <li>1 fat-free mozzarella string cheese stick</li>
           <li>1 medium orange</li>
      </ul>
      </div>
      <div class="paragraph">
        <p><b>Dinner:</b></p>
      </div>
      <div class="paragraph">
        <ul>
           <li>4 ounces shrimp, grilled or sauteed with 1 teaspoon olive oil and 1 teaspoon chopped garlic</li>
           <li>1 medium artichoke, steamed</li>
           <li>1/2 cup whole wheat couscous with 2 tablespoons diced bell pepper, 1/4 cup garbanzo beans, 1 teaspoon chopped fresh cilantro, and 1 tablespoon fat-free honey mustard dressing</li>
      </ul>
      </div>
      <img style="padding-left: 3cm;" src="/images/3.jpg" width="70%" height="500cm" alt="">
`
let e3= `
<h3>Day 4</h3>
  <div class="paragraph">
    <p><b>Breakfast:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>1 light whole-grain English muffin with 1 tablespoon <a href="https://www.shape.com/healthy-eating/diet-tips/nut-butter-varieties">nut butter</a> and 1 tablespoon sugar-free fruit spread</li>
     <li>1 wedge honeydew</li>
     <li>1 cup skim milk</li>
     <li>2 slices Canadian bacon</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Snack:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>Yogurt parfait made with 1 cup low-fat vanilla yogurt, 2 tablespoons sliced strawberries or raspberries, and 2 tablespoons low-fat granola</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Lunch:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>Wrap made with 4 ounces thinly sliced lean roast beef, 1 6-inch whole wheat tortilla, 1/4 cup shredded lettuce, 3 medium tomato slices, 1 teaspoon horseradish, and 1 teaspoon Dijon mustard</li>
     <li>1/2 cup pinto beans or lentils with 1 teaspoon chopped basil and 1 tablespoon light Caesar dressing</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Snack:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>8 baked corn chips with 2 tablespoons guacamole (try <a href="https://www.shape.com/healthy-eating/10-amazing-recipes-help-you-celebrate-national-guacamole-day">one of these guac recipes</a>)</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Dinner:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>4 ounces grilled halibut</li>
     <li>1/2 cup sliced mushrooms sauteed with 1 teaspoon olive oil, 1/4 cup chopped yellow onion, and 1 cup green beans</li>
     <li>Salad made with 1 cup arugula, 1/2 cup halved cherry tomatoes, and 1 teaspoon balsamic vinaigrette</li>
     <li>1/2 cup warm unsweetened applesauce with 1/4 cup fat-free vanilla yogurt,</li>
     <li>1 tablespoon chopped pecans and dash cinnamon</li>
  </ul>  </div>
  <img style="padding-left: 3cm;" src="/images/4.jpg" width="60%" height="60%" alt="">`
  let e4 = `
  <h3>Day 5</h3>
  <div class="paragraph">
    <ul>
     <li>Burrito made with: 1 medium whole wheat tortilla, 4 scrambled egg whites, 1 teaspoon olive oil, 1/4 cup fat-free refried black beans, 2 tablespoons salsa, 2 tablespoons grated low-fat cheddar, and 1 teaspoon fresh cilantro</li>
     <li>1 cup mixed melon</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Snack:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>3 ounces sliced lean ham</li>
     <li>1 medium apple</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Lunch:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>Turkey burger (or one of these <a href="https://www.shape.com/healthy-eating/healthy-recipes/crazy-good-burger-recipes-vegetarian-cookout">veggie burgers</a>)</li>
     <li>Salad made with: 1 cup baby spinach, 1/4 cup halved cherry tomatoes, 1/2 cup cooked lentils, 2 teaspoons grated Parmesan, and 1 tablespoon light Russian dressing</li>
     <li>1 cup skim milk</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Snack:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>1 fat-free mozzarella string cheese stick</li>
     <li>1 cup red grapes</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Dinner:&nbsp;</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>5 ounces grilled wild salmon</li>
     <li>1/2 cup brown or wild rice</li>
     <li>2 cups mixed baby greens with 1 tablespoon low-fat Caesar dressing</li>
     <li>1/2 cup all-fruit strawberry sorbet with 1 sliced pear</li>
  </ul>
  </div>
  <img  style="padding-left: 3cm;" src="/images/5.jpg" width="65%" height="60%" alt="">
`
let e5 = `
<h3>Day 6</h3>
  <div class="paragraph">
    <p><b>Breakfast:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>Frittata made with 3 large egg whites, 2 tablespoons diced bell peppers, 2 teaspoons chopped spinach, 2 tablespoons part-skim shredded mozzarella, and 2 teaspoons pesto 1/2 cup fresh raspberries</li>
     <li>1 small bran muffin</li>
     <li>1 cup skim milk</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Snack:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>1/2 cup low-fat vanilla yogurt with 1 tablespoon ground flaxseed and 1/2 cup diced pear</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Lunch:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>4 ounces sliced turkey breast</li>
     <li>Tomato-cucumber salad made with 5 slices tomato, 1/4 cup sliced cucumber, 1 teaspoon fresh chopped thyme, and 1 tablespoon fat-free Italian dressing</li>
     <li>1 medium orange</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Snack:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>Smoothie made with 3/4 cup skim milk, 1/2 banana, 1/2 cup low-fat yogurt, and 1/4 cup sliced strawberries (Psst: Here are more&nbsp;<a href="https://www.shape.com/healthy-eating/healthy-drinks/4-smoothie-recipes-weight-loss">weight loss smoothie ideas</a>.)</li>
  </ul>
  </div>
  <div class="paragraph">
    <p><b>Dinner:</b></p>
  </div>
  <div class="paragraph">
    <ul>
     <li>4 ounces red snapper baked with 1 teaspoon olive oil, 1 teaspoon lemon juice, and 1/2 teaspoon no-sodium seasoning</li>
     <li>1 cup spaghetti squash with 1 teaspoon olive oil and 2 teaspoon grated Parmesan cheese</li>
     <li>1 cup steamed green beans with 1 tablespoon slivered almonds</li>
  </ul>
  </div>
    <img style="padding-left: 3cm;" src="/images/6.jfif" width="30%" height="30%" alt="">
`
let e6 = `
<h3>Day 7</h3>
<div class="paragraph">
  <p><b>Breakfast:</b></p>
</div>
<div class="paragraph">
  <ul>
   <li>2 slices Canadian bacon</li>
   <li>1 whole-grain toaster waffle with sugar-free fruit spread</li>
   <li>3/4 cup berries</li>
   <li>1 cup skim milk</li>
</ul>
</div>
<div class="paragraph">
  <p><b>Snack:</b></p>
</div>
<div class="paragraph">
  <ul>
   <li>1/4 cup fat-free cottage cheese with 1/4 cup cherries and 1 tablespoon slivered almonds</li>
</ul>
</div>
<div class="paragraph">
  <p><b>Lunch:</b></p>
</div>
<div class="paragraph">
  <ul>
   <li>Salad made with: 2 cups baby spinach, 4 ounces grilled chicken, 1 tablespoon chopped dried cranberries, 3 slices avocado, 1 tablespoon slivered walnuts, and 2 tablespoons low-fat vinaigrette</li>
   <li>1 apple</li>
   <li>1 cup skim milk</li>
</ul>
</div>
<div class="paragraph">
  <p><b>Snack:</b></p>
</div>
<div class="paragraph">
  <ul>
   <li>1/4 cup plain fat-free Greek yogurt with 1 tablespoon sugar-free fruit spread and 1 tablespoon ground flaxseed</li>
   <li>1/4 cup blueberries</li>
</ul>
</div>
<div class="paragraph">
  <p><b>Dinner:</b></p>
</div>
<div class="paragraph">
  <ul>
   <li>4 ounces lean pork tenderloin stir-fried with onions, garlic, broccoli, and bell pepper</li>
   <li>1/2 cup brown rice</li>
   <li>5 medium tomato slices with 1 teaspoon each chopped ginger, chopped cilantro, light soy sauce, and rice wine vinegar</li>
</ul>
</div>
<img style="padding-left: 3cm;" src="/images/7.jpg" width="50%" height = "50%" alt="">`
function day(b) {
    let i = +b ;
    let html = document.getElementById("video");
    html.innerHTML = "";
    let p = `
    <iframe width="101.2%" height="99.7%" src="${a[i].video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    `
    html.innerHTML += p ; 
    f1(i);
}
function f1(i) {
    let a = document.getElementById("diet")
    a.innerHTML = "";
    if(i==0) {
        a.innerHTML += e0;
        return;
    }
    if(i==1) {
        a.innerHTML +=e1 ; 
        return;
    }
    if(i==2) {
        a.innerHTML +=e2 ; 
        return;
    }
    if(i==3) {
        a.innerHTML +=e3;
        return;
    }
    if(i==4) {
        a.innerHTML +=e4;
        return;
    }
    if(i==5) {
        a.innerHTML+=e5 ; 
        return;
    }
    if(i==6) {
        a.innerHTML +=e6 ; 
        return;
    }
}
