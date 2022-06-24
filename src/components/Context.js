import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Dell Vostro 15 3510 - Tiger Lake",
                "src": "https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGRlbGwlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "description": "Dell laptop",
                "content": "11th Gen Core i5 QuadCore 08GB to 32GB 256GB SSD to 2-TB SSD + Optional HDD Intel Iris Xe Graphics 15.6 Full HD 1080p AG Narrow Border WVA Display Backlit KB FP Reader TPM",
                "price": 1050,
                "colors": ["red", "black", "gray", "silver"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Dell Inspiron 15 3511 - Tiger Lake",
                "src": "https://images.unsplash.com/photo-1509701852059-c221a6f1e878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxkZWxsJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "description": "Dell laptop",
                "content": "11th Gen Core i5 08GB to 32GB 512GB to 02-TB SSD 2-GB NVIDIA MX350 GDDR5 GC 15.6 Full HD 1080p Narrow Border LED Display WavesMaxx Audio W10.",
                "price": 1300,
                "colors": ["red", "crimson", "black","white"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Dell XPS 15 9575 2-in-1",
                "src": "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYyfHxkZWxsJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "description": "Dell laptop",
                "content": "8th Gen Ci7 QuadCore 16GB 512GB SSD 4-GB AMD Radeon RX Vega M GL GC 15.6 4K Ultra HD InfinityEdge 2160p Convertible Touchscreen Win 10",
                "price": 980,
                "colors": ["lightblue", "white", "crimson", "black"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Microsoft Surface Laptop",
                "src": "https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGFjZXIlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "description": "Microsoft Laptop",
                "content": "Go 2 i5-64GB to 02-TB SSD 2-GB NVIDIA MX350 GDDR5 GC 15.6 Full HD 1080p Narrow Border LED Display WavesMaxx Audio W10",
                "price": 1500,
                "colors": ["orange", "black", "crimson", "white"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Dell XPS 13 9305",
                "src": "https://images.unsplash.com/photo-1593642633279-1796119d5482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "description": "Dell Laptop",
                "content": "11th Gen Core i7 QuadCore 08GB 512GB SSD Intel Iris-Xe Graphics 13.3.Full HD 1080p InfinityEdge Touchscreen Display Backlit KB FP Reader Waves MaxxAudio Pro W10",
                "price": 980,
                "colors": ["orange", "pink", "red", "purple"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Dell XPS 13 7390 Comet Lake",
                "src": "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRlbGwlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "description": "Dell Laptop",
                "content": "10th Gen Core i7 Multi Core 16GB 512GB SSD 13.3 Ultra HD 4K Touchscreen Display Backlit KB FP Reader Waves MaxxAudio Pro.",
                "price": 1400,
                "colors": ["orange", "black", "crimson", "purple"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Dell G15 5515 Gaming Laptop",
                "src": "https://images.unsplash.com/photo-1611258623154-c01feea09b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGRlbGwlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "description": "Dell Laptop",
                "content": "AMD Ryzen 7 5800H OctaCore Processor 08GB to 32GB 512GB to 01-TB SSD 4-GB NVIDIA GeForce RTX3050Ti GDDR6 GC 15.6 Full HD 1080p 120Hz 250nits Narrow Border Display Backlit KB W11.",
                "price": 1090,
                "colors": ["silver", "black", "crimson", "purple"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Dell Inspiron 14 5410 x360",
                "src": "https://images.unsplash.com/photo-1565375706404-082d37dd1f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN1cmZhY2UlMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "description": "Dell Laptop",
                "content": "11th Gen Core i5 08GB 512GB SSD Intel Iris Xe Graphics 14 Full HD 1080p Narrow Border Touchscreen Convertible Display Backlit KB",
                "price": 900,
                "colors": ["gold", "black", "silver", "white"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "Dell Latitude 9520 ",
                "src": "https://images.unsplash.com/photo-1605988177955-9e58df5fed05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHN1cmZhY2UlMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "description": "Dell Laptop",
                "content": "11th Gen Core i5 08GB to 32GB 512GB to 02-TB SSD 2-GB NVIDIA MX350 GDDR5 GC 15.6 Full HD 1080p Narrow Border LED Display WavesMaxx Audio W10",
                "price": 1500,
                "colors": ["gold", "black", "crimson", "silver"],
                "count": 1
            }

        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


