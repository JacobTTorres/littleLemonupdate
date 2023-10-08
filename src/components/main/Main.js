import React from 'react';

import './main.css';
import GreekSaladImg from '../../icons_assets/greek salad.jpg';
import Bruchetta from '../../icons_assets/bruchetta.svg';
import LemonDessert from '../../icons_assets/lemon dessert.jpg';

export default function Main() {
	return (
		<main>
			<section className="specials">
				<div className="specTop">
					<h1 className="specHeader">This weeks specials!</h1>
					<button className="specBtn">Online Menu</button>
				</div>
				<div className="specBottom">
					<div className="card">
						<img src={GreekSaladImg} alt="" className="cardImg" />
						<div className="lowerCard">
							<div className="specCardTop">
								<h4 className="itemTitle">Greek salad</h4>
								<p className="price">$12.99</p>
							</div>
							<div className="cardMid">
								<p className="cardInfo">
									The famous greek salad of crispy lettuce, peppers, olives and
									our Chicago style feta cheese, garnished with crunchy garlic
									and rosemary croutons.
								</p>
							</div>
							<div className="specCardBottom">
								<h5 className="orderDeli">Order a delivery</h5>
								<span className="material-symbols-outlined">
									takeout_dining
								</span>
							</div>
						</div>
					</div>
					<div className="card">
						<img src={Bruchetta} alt="" className="cardImg" />
						<div className="lowerCard">
							<div className="specCardTop">
								<h4 className="itemTitle">Bruchetta</h4>
								<p className="price">$ 5.99</p>
							</div>
							<div className="cardMid">
								<p className="cardInfo">
									Our Bruschetta is made from grilled bread that has been
									smeared with garlic and seasoned with salt and olive oil.
								</p>
							</div>
							<div className="specCardBottom">
								<h5 className="orderDeli">Order a delivery</h5>
								<span className="material-symbols-outlined">
									takeout_dining
								</span>
							</div>
						</div>
					</div>
					<div className="card">
						<img src={LemonDessert} alt="" className="cardImg" />
						<div className="lowerCard">
							<div className="specCardTop">
								<h4 className="itemTitle">Lemon Dessert</h4>
								<p className="price">$ 5.00</p>
							</div>
							<div className="cardMid">
								<p className="cardInfo">
									This comes straight from grandma’s recipe book, every last
									ingredient has been sourced and is as authentic as can be
									imagined.
								</p>
							</div>
							<div className="specCardBottom">
								<h5 className="orderDeli">Order a delivery</h5>
								<span className="material-symbols-outlined">
									takeout_dining
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="testimonials">
				<h1 className="testHeader">Testimonials</h1>
				<div className="reviewContainer">
					<div className="reviewCards">
						<div className="cardTop">
							<span className="material-symbols-outlined ratingIcon">
								grade
							</span>
							<h5 className="rating">4.5/5</h5>
						</div>
						<div className="reviewer">
							<img
								src="https://loopstudio-jt-frontendmentor.netlify.app/static/media/image-interactive.1d330522c9ca6cf07a9c.jpg"
								alt=""
								className="reviewImg"
							/>
							<h5 className="reviewerName">Name</h5>
						</div>
						<p className="reviewText">
							Aspernatur, suscipit esse dolores eligendi sunt aliquid
							Doloremque, amet corporis!
						</p>
					</div>
					<div className="reviewCards">
						<div className="cardTop">
							<span className="material-symbols-outlined ratingIcon">
								grade
							</span>
							<h5 className="rating">3.2/5</h5>
						</div>
						<div className="reviewer">
							<img
								src="https://loopstudio-jt-frontendmentor.netlify.app/static/media/image-interactive.1d330522c9ca6cf07a9c.jpg"
								alt=""
								className="reviewImg"
							/>
							<h5 className="reviewerName">Name</h5>
						</div>
						<p className="reviewText">
							Doloremque nam ipsam non voluptas porro possimus . Eligendi
							numquam aperiam facere et.
						</p>
					</div>
					<div className="reviewCards">
						<div className="cardTop">
							<span className="material-symbols-outlined ratingIcon">
								grade
							</span>
							<h5 className="rating">5/5</h5>
						</div>
						<div className="reviewer">
							<img
								src="https://loopstudio-jt-frontendmentor.netlify.app/static/media/image-interactive.1d330522c9ca6cf07a9c.jpg"
								alt=""
								className="reviewImg"
							/>
							<h5 className="reviewerName">Name</h5>
						</div>
						<p className="reviewText">
							Reprehenderit quibusdam exercitationem atque eligendi. Harum, amet
							ab.
						</p>
					</div>
					<div className="reviewCards">
						<div className="cardTop">
							<span className="material-symbols-outlined ratingIcon">
								grade
							</span>
							<h5 className="rating">4.3/5</h5>
						</div>
						<div className="reviewer">
							<img
								src="https://loopstudio-jt-frontendmentor.netlify.app/static/media/image-interactive.1d330522c9ca6cf07a9c.jpg"
								alt=""
								className="reviewImg"
							/>
							<h5 className="reviewerName">Name</h5>
						</div>
						<p className="reviewText">
							Ipsa quas sint. Veritatis adipisci nam accusamus velit
							accusantium.
						</p>
					</div>
				</div>
			</section>
			<section className="lowerHeader">
				<div className="lowerLeft">
					<h1 className="lowerHead">Little Lemon</h1>
					<h3 className="lowerLocation">Chicago</h3>
					<p className="lowerInfo">
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
						ullamco est sit aliqua dolor do amet sint. Velit officia consequat
						duis enim velit mollit.
					</p>
				</div>
				<div className="lowerRight">
					<img
						src="https://loopstudio-jt-frontendmentor.netlify.app/static/media/image-interactive.1d330522c9ca6cf07a9c.jpg"
						alt=""
						className="bottomImg"
					/>
					<img
						src="https://loopstudio-jt-frontendmentor.netlify.app/static/media/image-interactive.1d330522c9ca6cf07a9c.jpg"
						alt=""
						className="topImg"
					/>
				</div>
			</section>
		</main>
	);
}
