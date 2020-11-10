import { Router } from 'express';
import multer from 'multer';
import VisualRecognitionV3 from 'watson-developer-cloud/visual-recognition/v3';
import fs from 'fs';

import uploadConfig from '../config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/app', upload.single('file'), async (req, res) => {
  const { path } = req.file;
  const visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey: '6Igi48rlnDRtoE9q1a0EK4wDUs1tQSKLG215wy9Q1yVG',
  });

  // eslint-disable-next-line camelcase
  const images_file = fs.createReadStream(`${path}`);
  // eslint-disable-next-line camelcase
  const classifier_ids = ['DefaultCustomModel_775974193'];
  const threshold = 0.6;

  const params = {
    images_file,
    classifier_ids,
    threshold,
  };

  visualRecognition.classify(params, (err, response) => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    let casdlad: object = [];

    if (err) {
      // eslint-disable-next-line no-console
      return res.json(casdlad);
    }

    if (response) {
      response.images.map(image => {
        return image.classifiers.map(clas => {
          // eslint-disable-next-line no-return-assign
          return (casdlad = clas.classes);
        });
      });
    }

    return res.json(casdlad);
  });
});

export default routes;
