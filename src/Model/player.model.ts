export interface Player {
    id: string;
    troopTier: number;
    marchSize: number;
    rallySize: number;
    fighters: { attack: number; defense: number; health: number };
    shooters: { attack: number; defense: number; health: number };
    rider: { attack: number; defense: number; health: number };
}