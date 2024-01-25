const githubApiUrl =
  "https://gist.githubusercontent.com/chrismarkpd/52e4beec3c85239e96e23547e2801756/raw/fee86a7ae62a83ae65c87477ca2c18c869c1d715/sample_shop_order.json";

const fetchData = async (api) => {
  try {
    const res = await fetch(api);
    return res.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

const extractData = (data) => {
  const { order } = data;
  const { email, id, name, line_items } = order;
  const lineItems = line_items.map(({ price, product_id, quantity, sku }) => {
    return { price, product_id, quantity, sku };
  });
  return { email, id, lineItems, name };
};

fetchData(githubApiUrl).then((data) => {
  console.log("data: ", data);
  const structuredData = extractData(data);
  console.log("structuredData: ", structuredData);
});
