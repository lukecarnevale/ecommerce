import './index.css'
import shirt from './images/shirt.jpeg'

function App () {
  return (
    <div className='grid-container'>
      <header className='row'>
        <div>
          <a className='brand' href='/'>amazona</a>
        </div>
        <div>
          <a href='cart.html'>Cart</a>
          <a href='signin.html'>Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className='row center'>
            <div className='card'>
              <a href='/'>
                <img className='medium' src={shirt} alt='product' />
              </a>
              <div className='card-body'>
                <a href='/'>
                  <h2>L.L. Bean Slim Shirts</h2>
                </a>
                <div className='rating'>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                </div>
                <div className='price'>$120 </div>
              </div>
            </div>
            <div className='card'>
              <a href='/'>
                {/* image size: 680px by 830px */}
                <img className='medium' src={shirt} alt='product' />
              </a>
              <div className='card-body'>
                <a href='/'>
                  <h2>L.L. Bean Slim Shirts</h2>
                </a>
                <div className='rating'>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                </div>
                <div className='price'>$120 </div>
              </div>
            </div>
            <div className='card'>
              <a href='/'>
                <img className='medium' src={shirt} alt='product' />
              </a>
              <div className='card-body'>
                <a href='/'>
                  <h2>L.L. Bean Slim Shirts</h2>
                </a>
                <div className='rating'>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                  <span><i className='fa fa-star' /></span>
                </div>
                <div className='price'>$120 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='row center'>All right reserved</footer>
    </div>
  )
}

export default App
