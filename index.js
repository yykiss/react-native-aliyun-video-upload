import { NativeModules, NativeEventEmitter } from 'react-native'

export const { AliyunVodFileUpload } = NativeModules

export const AliyunVodFileUploadEmitter = new NativeEventEmitter(AliyunVodFileUpload)
