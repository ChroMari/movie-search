
export default async function getTranslet (title) {
  const KEY = 'trnsl.1.1.20170323T113123Z.928aa928b9b4d04b.015f503e0a420970620880400d3ac95522add0b9';
  const URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${KEY}&text=${title}&lang=ru-en&format=plain`;

  try {
    const data = await fetch(URL).then(res => res.json());
    return data;
  } catch (err) {
    console.log(err);
  }
}