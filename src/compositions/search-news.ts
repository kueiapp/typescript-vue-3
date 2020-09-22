import { reactive, computed, ComputedRef } from "vue";

type News = {
	domain: string;
	domain_url: string;
	link: string;
	og_description: string;
	og_image: string;
	title: string;
	update_time: string;
};
type ResponseType = {status:string; data:News[]}
export const searchNews = () => {
	const state = reactive({
		newsList: [] as News[]
	});

	async function getNews(){
		const response = await fetch('https://hotnews.kueiapp.com/api/getWeblink?appid=960a23b8601ddb5baad1630621516562&updated=1&page=0')
		const result:ResponseType = await response.json()
		state.newsList = result.status==="OK"?result.data:[];
	};	

	return { getNews, state };
};
