import {useEffect} from "react";

export type PagesType ={
	photo:string
	heading:string
	about:string
	price:string
	rating:number[]
}
export type DataStateType={
	pages:PagesType[]

}
export const dataState = {
	pages: [
		{
			photo: 'https://s3.amazonaws.com/nikeinc/assets/44326/Su15_Nike_FlyEase_Blk_Pair_V1_square_1600.jpg?1436469245',
			heading: 'Nike',
			about: "Стильные и комфортные кроссовки Nike - идеальный выбор. Они объединяют стильный дизайн, высокое качество и удобство. Подходят для тренировок и повседневной носки. Разнообразие моделей и цветовых вариантов позволят найти идеальную пару. Доверьтесь легенде спортивной обуви и ощутите комфорт на каждом шагу.",
			price:'700$',
			rating:[4,2,3,4,5,6,7]
		},
		{
			photo: 'https://outmaxshop.com/components/com_jshopping/files/img_products/11072/puma-thunder-electric-11072-1.jpg',
			heading: 'Puma',
			about: "Кроссовки Puma - стильные и комфортные обуви, сочетающие современный дизайн и высокое качество. Подходят для активного образа жизни и спорта. Выбор модных цветов и уникальных деталей.",
			price:'900$',
			rating:[4,2]

		},
		{
			photo: 'https://ae04.alicdn.com/kf/Sc66531661dbf437faec31b563a2325e6x.jpg',
			heading: 'Adidas',
			about: "Кроссовки Adidas - модные и функциональные обуви, обладающие стилем и инновационными технологиями. Идеальны для спорта и повседневной носки. Высокое качество и удобство на каждом шагу.",
			price:'500$',
			rating:[4,2]

		},
	],
}
function calculateAverageRating(ratings:number[]) {
	const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);
	const averageRating = totalRating / ratings.length;
	return Math.floor(averageRating);
}
export function AddRating(id:number,currentRating:number){
	dataState.pages[id].rating.push(currentRating)
}

