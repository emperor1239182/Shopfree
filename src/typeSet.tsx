export type allProducts = {
    id : number;
    name : string;
    category : string;
    price : string;
    oldPrice : string;
    discount : string;
    image : string
}
export type product = {
    products : allProducts [];
    scrollRef?: React.RefObject<HTMLUListElement>;
}