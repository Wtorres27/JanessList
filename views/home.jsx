//folder views file home.jsx
const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <image src="\images\Ristorante.jpg" alt="" className='img-fluid w-50 h-auto' />

        <div>
        Photo by <a href="https://unsplash.com/@tamarushphotos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tamara Malaniy</a> on <a href="https://unsplash.com/photos/text-ZPrwIhBGfT4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
        <div>
          <a href="/places">Explore Places</a>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
