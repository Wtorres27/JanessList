const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="./images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" className='img-fluid w-50 h-auto'/>
                    </div>
                        Photo by <a src=''>Brenda Godinez</a> on <a href='https://unsplash.com/@cravethebenefits'>Unsplash</a>
                    <div>
                </div>
                <a href="/places"><button className="btn-primary">Places Page</button></a>
                <div>
                <a href='/places'>Explore Places</a>
                </div>

            </main>
        </Def>
    )
}

module.exports = home