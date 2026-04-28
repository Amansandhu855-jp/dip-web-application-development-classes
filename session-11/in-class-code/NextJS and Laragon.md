Updating Node.js in Laragon is a straightforward process. Here's how you can do it:

**Taken from:** https://help.screencraft.net.au/hc/1299211922/84/update-nodejs-and-npm-in-laragon?category_id=35

1. **Check the currently installed Node.js version**:
   Open a terminal window by clicking the Terminal button in the Laragon Button Menu and type:

   ```bash
   node -v
   ```

   This will display the currently installed Node.js version.

2. **Download the latest Node.js version**: https://nodejs.org/en/download
   Visit the official Node.js website and download the latest LTS win-x64 version. The file will be a ZIP archive, such as `node-v14.16.0-win-x64.zip`.

3. **Unpack the downloaded ZIP archive**:
   Extract the contents of the ZIP file into a folder with the same name, for example, `node-v14.16.0-win-x64`.

4. **Move the new Node.js version to Laragon**:
   Move the extracted folder to the `bin\nodejs` directory of your Laragon installation.

5. **Select the new Node.js version in Laragon**:
   In the Node.js section of Laragon, select the newly installed Node.js version.

6. **Update the system PATH**:
   - In the Tools section, select Tools, then Path, then 'Remove Laragon from Path'.
   - Wait a few seconds.
   - Then select Tools, then Path, then 'Add Laragon to Path'.
   - Wait a few seconds again.

7. **Verify the update**:
   Open a terminal window again and type `node -v` to confirm the Node.js version has been updated.

8. **Remove the old Node.js version** (optional):
   If desired, you can remove the previous Node.js version by deleting its corresponding folder from the `bin\nodejs` directory¹².

Remember to close and reopen any command prompts or terminals to ensure they recognise the updated Node.js version.
