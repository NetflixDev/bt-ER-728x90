import '@netflixadseng/wc-netflix-brand-logo'
import '@netflixadseng/wc-netflix-cta'
import '@netflixadseng/wc-netflix-text'
import '@netflixadseng/wc-netflix-img'
import { Styles, Markup, Align, Effects } from 'ad-view'
import { ImageManager } from 'ad-control'
import { Animation } from '@common/js/Animation.js'
import { Control } from '@common/js/Control.js'
import '@netflixadseng/wc-netflix-flushed-ribbon'
import '@netflixadseng/wc-netflix-video'
import CanvasIris from '@common/js/CanvasIris.js'
import { UIComponent, UIBorder, UIButton, UIImage, TextFormat, UITextField, UISvg } from 'ad-ui'
import { ObjectUtils } from 'ad-utils'
import { sideBySideInit, stackedInit } from './EndFrame/inits'
import { sideBySidePostMarkup, stackedPostMarkup } from './EndFrame/postmarkups'

export function Main() {
	var T = Markup.get('main')
	Styles.setCss(T, {
		position: 'absolute',
		width: adParams.adWidth,
		height: adParams.adHeight,
		opacity: 0,
		left: '0px',
		top: '0px',
		overflow: 'hidden',
		userSelect: 'none'
	})
	Styles.setCss(T, { backgroundColor: '#000000' })

	return T
}

// ==============================================================================================================
export function Intro(arg) {
	const base = {
		id: 'intro-container',
		css: {
			width: 'inherit',
			height: 'inherit'
		}
	}
	const T = new UIComponent(ObjectUtils.defaults(arg, base, true))

	return T
}

// ==============================================================================================================
export function EndFrame(arg) {
	const base = {
		id: 'end-frame-container',
		css: {
			width: 'inherit',
			height: 'inherit'
		}
	}
	const T = new UIComponent(ObjectUtils.defaults(arg, base, true))

	let endFrameInit
	switch (arg.layout) {
		case 'SIDE_BY_SIDE_LEFT':
		case 'SIDE_BY_SIDE_WIDE':
		default:
			endFrameInit = sideBySideInit
			break
		case 'STACKED_LEFT':
		case 'STACKED_CENTER':
		case 'STACKED_WIDE':
			endFrameInit = stackedInit
			break
	}
	endFrameInit(T)

	let postMarkup
	switch (arg.layout) {
		case 'SIDE_BY_SIDE_LEFT':
		case 'SIDE_BY_SIDE_WIDE':
		default:
			postMarkup = sideBySidePostMarkup
			break
		case 'STACKED_LEFT':
		case 'STACKED_CENTER':
		case 'STACKED_WIDE':
			postMarkup = stackedPostMarkup
			break
	}
	T.postMarkupStyling = postMarkup

	return T
}

export function MainBorder() {
	new UIBorder({
		target: View.main,
		size: 1,
		color: '#000000'
	})
}
