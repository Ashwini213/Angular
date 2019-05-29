import { Label } from './label';
import { Collaborator } from './collaborators';

export interface Note {
    noteId: string;
    title: string;
    description: string;
    archive: boolean;
    pinned: boolean;
    inTrash: boolean;
    userId: string;
    color: string;
    labels: Label[];
    remainder: string;
    collaborators: Collaborator[];
}
