import getUser from '../../utils/getUser'

const apiGetUser = async (req, res) => {
  const data = await getUser('Lucas-B-C-Oliveira')
  res.send('Testando!')
}

export default apiGetUser