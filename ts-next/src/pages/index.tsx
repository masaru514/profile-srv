import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import CheckLists from '../components/CheckLists'

const marginBottom = {
	marginBottom: '50px',
}

type FileData = {
	imagePreviewUrl: string | undefined
}

type Selectors = {
	select: string
	name: string
	id: string
}

interface Data {
	[interest: string]: string[],
	food: string[],
	style: string[],
	activity: string[],
}

const Img = styled.img`
  width: 300px;
`

export default function Home() {
	const [data, setData] = useState<Data>({
		interest: [],
		food: [],
		style: [],
		activity: [],
	})

	const [fileData, setFileData] = useState<FileData>({
		imagePreviewUrl: '',
	})

	async function generateImage(image: File) {
		console.log('生成開始')
		console.log(image)
		const apiUrl = ('http://localhost:3000/api/hello')
		const getImage = await axios.post(apiUrl, image)
		// const blob = window.URL.createObjectURL(getImage.data)
		// console.log(blob)
		setFileData({ imagePreviewUrl: blob })
	}

	const FileUpload = () => {
		function onChange(e: React.ChangeEvent<HTMLInputElement>) {
			const image = e.target.files && e.target.files[0]
			if (!image) return

			// apiに画像を送って処理をしたい
			generateImage(image)

			// ここでブラウザ側の読み込みの処理をしている
			const reader = new FileReader()
			reader.onload = () => {
				setFileData({
					imagePreviewUrl: reader.result as string,
				})
			}
			reader.readAsDataURL(image)
		}

		return (
			<div>
				<input
					id="file"
					type="file"
					accept=".png,.jpg,.jpeg"
					onChange={(e) => onChange(e)}
				/>
				<Img src={fileData.imagePreviewUrl} alt="" />
			</div>
		)
	}

	function addCheckedElement(e: HTMLInputElement): void {
		const dataKey = data[e.name]
		const array = []
		if (dataKey.includes(e.value)) {
			const newArr = dataKey.filter((item: string) => item !== e.value)
			setData({ ...data, [e.name]: newArr })
		} else {
			array.push(e.value)
			const newArr = dataKey.concat(array)
			setData({ ...data, [e.name]: newArr })
		}
		console.log(data)
	}


	const interestArray: Selectors[] = [
		{ select: 'アウトドア', name: 'interest', id: '1' },
		{ select: 'アニメ・漫画', name: 'interest', id: '2' },
		{ select: 'アート・カルチャー', name: 'interest', id: '3' },
		{ select: 'エンターテインメント', name: 'interest', id: '4' },
		{ select: 'キャリア', name: 'interest', id: '5' },
		{ select: 'ゲーム業界', name: 'interest', id: '6' },
		{ select: 'スポーツ', name: 'interest', id: '7' },
		{ select: 'テクノロジー', name: 'interest', id: '8' },
		{ select: 'ニュース', name: 'interest', id: '9' },
		{ select: 'ビジネス・金融', name: 'interest', id: '10' },
		{ select: 'ファッション・ビューティー', name: 'interest', id: '11' },
		{ select: 'フィットネス', name: 'interest', id: '12' },
		{ select: 'ライフスタイル', name: 'interest', id: '13' },
		{ select: '旅行', name: 'interest', id: '14' },
		{ select: '科学', name: 'interest', id: '15' },
		{ select: '音楽', name: 'interest', id: '16' },
		{ select: '食べ物', name: 'interest', id: '17' },
	]

	const foodsArray: Selectors[] = [
		{ select: '寿司', name: 'food', id: '1' },
		{ select: '焼き肉', name: 'food', id: '2' },
		{ select: 'カレー', name: 'food', id: '3' },
		{ select: 'ラーメン', name: 'food', id: '4' },
		{ select: 'そば', name: 'food', id: '5' },
		{ select: 'うどん', name: 'food', id: '6' },
		{ select: 'パスタ', name: 'food', id: '7' },
		{ select: 'シチュー', name: 'food', id: '8' },
		{ select: 'オムライス', name: 'food', id: '9' },
		{ select: '天ぷら', name: 'food', id: '10' },
		{ select: 'からあげ', name: 'food', id: '11' },
		{ select: 'ビーガン', name: 'food', id: '12' },
		{ select: '特になし', name: 'food', id: '13' },
	]

	const StylesArray: Selectors[] = [
		{ select: 'ツイート多め', name: 'style', id: '1' },
		{ select: 'ふぁぼ魔', name: 'style', id: '2' },
		{ select: 'シェア大好き', name: 'style', id: '3' },
		{ select: 'クソリプ多め', name: 'style', id: '4' },
		{ select: '画像・動画多め', name: 'style', id: '5' },
		{ select: 'ROM専', name: 'style', id: '6' },
		{ select: 'TL見ない', name: 'style', id: '7' },
	]

	const ActivityArray: Selectors[] = [
		{ select: '朝', name: 'activity', id: '1' },
		{ select: '昼', name: 'activity', id: '2' },
		{ select: '夜', name: 'activity', id: '3' },
		{ select: '不定期', name: 'activity', id: '4' },
		{ select: 'ニート', name: 'activity', id: '5' },
		{ select: '休日', name: 'activity', id: '6' },
		{ select: '平日', name: 'activity', id: '7' },
		{ select: '住民', name: 'activity', id: '8' },
	]
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section style={marginBottom}>
				<h2>自己紹介カード</h2>
				<h3>興味のあるもの</h3>
				<CheckLists addCheckedElement={(e) => addCheckedElement(e)} array={interestArray} />
				<h3>好きなたべもの</h3>
				<CheckLists addCheckedElement={(e) => addCheckedElement(e)} array={foodsArray} />
				<h3>Twitterのスタイル</h3>
				<CheckLists addCheckedElement={(e) => addCheckedElement(e)} array={StylesArray} />
				<h3>Twitter活動時間</h3>
				<CheckLists addCheckedElement={(e) => addCheckedElement(e)} array={ActivityArray} />
				<h3>画像をアップロード</h3>
				<FileUpload />
				<button onClick={() => generateImage()}>画像を生成する</button>
			</section>
		</div>
	)
}
