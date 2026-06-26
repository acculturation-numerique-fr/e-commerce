import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  const { email, firstName, lastName, address, city, zipCode, items, total } = req.body;

  // Simple validation
  if (!email || !firstName || !lastName || !address || !city || !zipCode || !items || items.length === 0) {
    return res.status(400).json({ message: 'Missing required order fields or empty cart' });
  }

  console.log(`[Order Received] User: ${firstName} ${lastName} (${email}) - Total: €${total}`);

  // Simulating order processing
  return res.status(201).json({
    status: 'success',
    message: 'Order placed successfully!',
    orderId: `DRY-${Math.floor(100000 + Math.random() * 900000)}`,
  });
});

export default router;
