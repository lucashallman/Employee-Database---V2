INSERT INTO departments (name)
VALUES 
    ('Wolf Wrangling'),
    ('Bear Fighting'),
    ('Daffodil Farming'),
    ('Monster Hunting'),
    ('Demon Purging');

INSERT INTO roles (dept_id, name)
VALUES 
    (1, 'Feed Specialist - WR'),
    (1, 'Fang Sharpener'),
    (1, 'Pelt Renderer'),
    
    (2, 'Feed Specialist - BF'),
    (2, 'Claw Manicurist'),
    (2, 'Hibernation Planner'),
    
    (3, 'Flautist'),
    (3, 'Field Prancer'),
    (3, 'Flower Powerer'),

    (4,'Cryptozoologist'),
    (4,'Mothman'),
    (4,'Defense Secretary'),

    (5,'High Priest'),
    (5,'Low Priest'),
    (5,'Double Agent');

INSERT INTO employees (dept_id, role_id, manager_id, name)
VALUES
    (1, 1, NULL, 'John Wick'),
    (1, 2, 1, 'Jorsh Kengle'),
    (1, 3, 1, 'Mart Knart'),
    
    (2, 1, NULL, 'Grub Pulper'),
    (2, 2, 4, 'Greenboy Smackatron'),
    (2, 3, 4, 'Jimmy Coconuts'),

    (3, 1, NULL, 'Cunk Hunkley'),
    (3, 2, 7, 'Brick Masters'),
    (3, 3, 7, 'Leonard Ninjago'),

    (4, 1, NULL, 'Greebus Pleeb'),
    (4, 2, 10, 'Walton Goggins'),
    (4, 3, 10, 'Fifteen Ducks'),

    (5, 1, NULL, 'Walt Disney'),
    (5, 2, 13, 'Smallt Disney'),
    (5, 3, 13, 'Azakenathon Basil');