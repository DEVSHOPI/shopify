export default function handler(req, res) {
  const SHOP_B_DOMAIN = process.env.SHOP_B_DOMAIN; // ex: https://7pjsjj-1i.myshopify.com

  if (!SHOP_B_DOMAIN) {
    return res.status(500).send("SHOP_B_DOMAIN not configured");
  }

  const { vid, qty } = req.query;

  if (!vid) {
    return res.status(400).send("Missing vid parameter");
  }

  const quantity = qty && !isNaN(Number(qty)) ? Number(qty) : 1;

  const destination = `${SHOP_B_DOMAIN}/cart/${vid}:${quantity}`;

  return res.redirect(302, destination);
}
