import Head from 'next/head'
import { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import styled from 'styled-components'

const grid = {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr 1fr',
}

const marginBottom = {
	marginBottom: '50px',
}

type Selectors = {
	select: string
	name: string
	id: string
}

type FileData = {
	imagePreviewUrl: string | undefined
}

const Interesting = () => {
	const interestArray: Selectors[] = [
		{ select: 'アウトドア', name: 'inerest', id: '1' },
		{ select: 'アニメ・漫画', name: 'inerest', id: '2' },
		{ select: 'アート・カルチャー', name: 'inerest', id: '3' },
		{ select: 'エンターテインメント', name: 'inerest', id: '4' },
		{ select: 'キャリア', name: 'inerest', id: '5' },
		{ select: 'ゲーム業界', name: 'inerest', id: '6' },
		{ select: 'スポーツ', name: 'inerest', id: '7' },
		{ select: 'テクノロジー', name: 'inerest', id: '8' },
		{ select: 'ニュース', name: 'inerest', id: '9' },
		{ select: 'ビジネス・金融', name: 'inerest', id: '10' },
		{ select: 'ファッション・ビューティー', name: 'inerest', id: '11' },
		{ select: 'フィットネス', name: 'inerest', id: '12' },
		{ select: 'ライフスタイル', name: 'inerest', id: '13' },
		{ select: '旅行', name: 'inerest', id: '14' },
		{ select: '科学', name: 'inerest', id: '15' },
		{ select: '音楽', name: 'inerest', id: '16' },
		{ select: '食べ物', name: 'inerest', id: '17' },
	]

	return (
		<FormControl>
			<FormGroup style={grid}>
				{interestArray.map(({ select, name, id }) => (
					<FormControlLabel
						control={<Checkbox name={name} />}
						label={select}
						key={id}
					/>
				))}
			</FormGroup>
		</FormControl>
	)
}

const Foods = () => {
	const foodsArray: Selectors[] = [
		{ select: '寿司', name: 'inerest', id: '1' },
		{ select: '焼き肉', name: 'inerest', id: '2' },
		{ select: 'カレー', name: 'inerest', id: '3' },
		{ select: 'ラーメン', name: 'inerest', id: '4' },
		{ select: 'そば', name: 'inerest', id: '5' },
		{ select: 'うどん', name: 'inerest', id: '6' },
		{ select: 'パスタ', name: 'inerest', id: '7' },
		{ select: 'シチュー', name: 'inerest', id: '8' },
		{ select: 'オムライス', name: 'inerest', id: '9' },
		{ select: '天ぷら', name: 'inerest', id: '10' },
		{ select: 'からあげ', name: 'inerest', id: '11' },
		{ select: 'ビーガン', name: 'inerest', id: '12' },
		{ select: '特になし', name: 'inerest', id: '13' },
	]

	return (
		<FormControl>
			<FormGroup style={grid}>
				{foodsArray.map(({ select, name, id }) => (
					<FormControlLabel
						control={<Checkbox name={name} />}
						label={select}
						key={id}
					/>
				))}
			</FormGroup>
		</FormControl>
	)
}

const TwitterStyles = () => {
	const StylesArray: Selectors[] = [
		{ select: 'ツイート多め', name: 'inerest', id: '1' },
		{ select: 'ふぁぼ魔', name: 'inerest', id: '2' },
		{ select: 'シェア大好き', name: 'inerest', id: '3' },
		{ select: 'クソリプ多め', name: 'inerest', id: '4' },
		{ select: '画像・動画多め', name: 'inerest', id: '5' },
		{ select: 'ROM専', name: 'inerest', id: '6' },
		{ select: 'TL見ない', name: 'inerest', id: '7' },
	]

	return (
		<FormControl>
			<FormGroup style={grid}>
				{StylesArray.map(({ select, name, id }) => (
					<FormControlLabel
						control={<Checkbox name={name} />}
						label={select}
						key={id}
					/>
				))}
			</FormGroup>
		</FormControl>
	)
}

const Activity = () => {
	const ActivityArray: Selectors[] = [
		{ select: '朝', name: 'inerest', id: '1' },
		{ select: '昼', name: 'inerest', id: '2' },
		{ select: '夜', name: 'inerest', id: '3' },
		{ select: '不定期', name: 'inerest', id: '4' },
		{ select: 'ニート', name: 'inerest', id: '5' },
		{ select: '休日', name: 'inerest', id: '6' },
		{ select: '平日', name: 'inerest', id: '7' },
		{ select: '住民', name: 'inerest', id: '8' },
	]

	return (
		<FormControl>
			<FormGroup style={grid}>
				{ActivityArray.map(({ select, name, id }) => (
					<FormControlLabel
						control={<Checkbox name={name} />}
						label={select}
						key={id}
					/>
				))}
			</FormGroup>
		</FormControl>
	)
}

const Img = styled.img`
  width: 300px;
`

const FileUpload = () => {
	const [fileData, setFileData] = useState<FileData>({
		imagePreviewUrl: '',
	})

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		const image = e.target.files && e.target.files[0]
		if (!image) return
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

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section style={marginBottom}>
				<h2>自己紹介カード</h2>
				<h3>興味のあるもの</h3>
				<Interesting />
				<h3>好きなたべもの</h3>
				<Foods />
				<h3>Twitterのスタイル</h3>
				<TwitterStyles />
				<h3>Twitter活動時間</h3>
				<Activity />
				<h3>画像をアップロード</h3>
				<FileUpload />
			</section>
		</div>
	)
}
