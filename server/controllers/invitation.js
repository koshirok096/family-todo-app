import { handleError } from "../error.js";
import Invitation from '../models/Invitation.js';

// Creating an Invitation
app.post('/groups/:groupId/invite', async (req, res) => {
    // Retrieve and validate the inviting user and group
    // Check if the invited user exists
    const invitation = new Invitation({
     group: req.params.groupId,
     invitingUser: req.user.id,
     invitedUser: req.body.invitedUserId,
     status: 'pending'
    });
    await invitation.save();
    // Optionally, send an email or notification
    res.status(200).send('Invitation sent');
   });
   app.post('/invitations/:invitationId/accept', async (req, res) => {
    const invitation = await Invitation.findById(req.params.invitationId).populate('group');
    // Validate that the current user is the invited user
    // Check if the user is already a member of the group
    if (invitation.group.members.includes(req.user.id)) {
     return res.status(400).send('User is already a member of the group');
    }
    // Update the invitation status
    invitation.status = 'accepted';
    await invitation.save();
    // Add the user to the group
    const group = await Group.findById(invitation.group._id);
    group.members.push(req.user.id);
    await group.save();
    res.status(200).send('Invitation accepted');
   });
   // Accepting/Rejecting the Invitation
   app.post('/invitations/:invitationId/reject', async (req, res) => {
    const invitation = await Invitation.findById(req.params.invitationId);
    // Validate that the current user is the invited user
    invitation.status = 'rejected';
    await invitation.save();
    res.status(200).send('Invitation rejected');
   });
   // Retrieving Invitations
   app.get('/invitations', async (req, res) => {
    const invitations = await Invitation.find({ invitedUser: req.user.id, status: 'pending' }).populate('group');
    res.json(invitations);
   });