import { Styles, Markup, Align, Effects } from 'ad-view'
import { ImageManager } from 'ad-control'
import { Animation } from '@common/js/Animation.js'
import { Control } from '@common/js/Control.js'
import CanvasIris from '@common/js/CanvasIris.js'
import { UIComponent, UIBorder, UIButton, UIImage, TextFormat, UITextField, UISvg } from 'ad-ui'
import { ObjectUtils } from 'ad-utils'
import baseInit from './baseInit.js'

export { sideBySideInit, stackedInit }

function sideBySideInit(T) {
	baseInit(T, { logoWidth: 112, ctaWidth: 107, ctaMaxWidth: 130, ctaHeight: 30 })
}

function stackedInit(T) {
	baseInit(T, {
		logoWidth: 76,
		ctaWidth: 76,
		ctaHeight: 19,
		extraCtaLogoInit: cta => {
			cta.setAttribute('min-font-size', 7)
			cta.setAttribute('horizontal-pad', '9%')
		}
	})
}
