export interface SmsListenerEvent {
  message?: string
  extras?: string
  status?: string
  timeout?: string
}

declare const SmsRetrieverModule: {
  requestPhoneNumber: () => Promise<string>
  startSmsRetriever: () => Promise<boolean>
  getAppSignature: () => Promise<string>
  addSmsListener: (callback: (event: SmsListenerEvent) => void) => Promise<boolean>
  removeSmsListener: () => void
}

export default SmsRetrieverModule
