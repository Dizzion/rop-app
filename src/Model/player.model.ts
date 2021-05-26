export interface Player {
    username: string;
    troopTier: number;
    marchSize: number;
    rallySize: number;
    fighters: { attack: number; defense: number; health: number };
    shooters: { attack: number; defense: number; health: number };
    rider: { attack: number; defense: number; health: number };
    troop: { attack: number; defense: number; health: number };
    troopDmg: { up: number; down: number };
}