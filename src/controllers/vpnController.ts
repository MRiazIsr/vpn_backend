import type { 
  Request, 
  Response 
} from 'express';
import type { IVpnConfig } from '../models/VpnConfig';

export const createVpnConfig = async (req: Request, res: Response) => {
  const { name, config } = req.body;
  const db = req.app.locals.db;

  try {
    const vpnConfigExists = db.prepare('SELECT * FROM vpn_configs WHERE name = ?').get(name);
    if (vpnConfigExists) {
      return res.status(400).json({ message: 'VPN configuration already exists' });
    }

    const newVpnConfig: IVpnConfig = { name, config };
    db.prepare('INSERT INTO vpn_configs (name, config) VALUES (?, ?)').run(newVpnConfig.name, newVpnConfig.config);

    res.status(201).json({ message: 'VPN configuration created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getVpnConfig = async (req: Request, res: Response) => {
  const { name } = req.params;
  const db = req.app.locals.db;

  try {
    const vpnConfig = db.prepare('SELECT * FROM vpn_configs WHERE name = ?').get(name);
    if (!vpnConfig) {
      return res.status(404).json({ message: 'VPN configuration not found' });
    }

    res.json(vpnConfig);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
