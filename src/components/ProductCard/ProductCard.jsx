import React from 'react';
import './ProductCard.scss'

export class ProductCard extends React.Component {
  state = {
    quantity: 1,
    radio: "100",
    cost: this.props.oneItem,
    oneItem: +this.props.oneItem,
  }

  minusOne = () => {
    if (this.state.quantity > 1) {
      this.setState((state) => {
        return {
          quantity: state.quantity - 1,
          cost: +this.state.cost > +this.state.oneItem ? state.cost - state.oneItem : state.oneItem,
        };
      });
    }
  }

  addOne = () => {
    this.setState((state) => {
      return {
        quantity: state.quantity + 1,
        cost: +state.cost + state.oneItem,
      };
    });
  }

  changeRadio = (event) => {
    this.setState({radio: event.target.value});
  }

  render() {
    const { title, description, imgUrl, id } = this.props;
    const { quantity, cost } = this.state;

    return (
      <article className="card">
        <div className="card__new">New</div>
        <a
          href="compare" 
          className="card__compare"
        > 
        <img 
          className="card__compare-img"
          src="./images/3.png" 
          alt="compare-logo"/>
        </a>
        <div  className="card__image-wrapper">
          <img 
            src={imgUrl}
            alt="product"
            className="card__image"
          />
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <div className="card__select ">Цвет
          <ul className="card__select-list">
            <li className="card__select-item">Красный</li>
            <li className="card__select-item">Зеленый</li>
            <li className="card__select-item">Красный</li>
          </ul>
        </div>
        <div className="card__cost">{cost} грн</div>
        <div className="card__inputs" >
        <div className="card__radio" onChange={this.changeRadio}>
          <input 
            id={id + 1} 
            type="radio" 
            name={id} 
            value="100" 
            checked={this.state.radio === "100"} 
          />
          <label htmlFor={id + 1}>100 мл</label>
        </div>
  
        <div className="card__radio" onChange={this.changeRadio}>
          <input 
            id={id + 2} 
            type="radio" 
            name={id} 
            value="200" 
            checked={this.state.radio === "200"} 
          />
          <label htmlFor={id + 2}>200 мл</label>
        </div>

        <div className="card__radio" onChange={this.changeRadio}>
          <input 
            id={id + 3} 
            type="radio" 
            name={id} 
            value="300" 
            checked={this.state.radio === "300"} 
          />
          <label htmlFor={id + 3}>300 мл</label>
        </div>

        </div>
        <div className="card__counter">
          <button
            className="card__minus"
            type="button"
            onClick={this.minusOne}
          >
            -
          </button>
          <div className="card__quantity">{quantity}</div>
          <button
            type="button"
            onClick={this.addOne}
            className="card__add"
          >
            +
          </button>
        </div>
        <button className="card__btn">Купить</button>
      </article>
    )
  }
}