import repository from './repository'

const resource = 'account'

export default {
  getMe () {
    return repository.get(`/${resource}/me/`)
  },
  checkPassword (value) {
    return repository.post(`/${resource}/me/password/`, { password: value })
  },
  verifyTFACode (code) {
    const payload = { code }
    return repository.post(`${resource}/tfa/verify/`, payload)
  },
  startTFASetup () {
    return repository.post(`${resource}/tfa/setup/`)
  },
  getKeyForTFASetup () {
    return repository.get(`${resource}/tfa/setup/key/`)
  },
  finalizeTFASetup (pinCode) {
    const payload = { pin_code: pinCode }
    return repository.post(`${resource}/tfa/setup/check/`, payload)
  },
  disableTFA (data) {
    return repository.post(`${resource}/tfa/disable/`, data)
  },
  resetRecoveryCodes (data) {
    return repository.post(`${resource}/tfa/reset_codes/`, data)
  },
  getForward () {
    return repository.get(`${resource}/forward/`)
  },
  setForward (data) {
    return repository.post(`${resource}/forward/`, data)
  },
  getAPIToken () {
    return repository.get(`${resource}/api_token/`)
  },
  createAPIToken () {
    return repository.post(`${resource}/api_token/`)
  },
  deleteAPIToken () {
    return repository.delete(`${resource}/api_token/`)
  }
}
